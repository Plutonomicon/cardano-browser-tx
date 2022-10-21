module Ctl.Internal.BalanceTx
  ( module BalanceTxErrorExport
  , module FinalizedTransaction
  , balanceTxWithConstraints
  ) where

import Prelude

import Control.Monad.Error.Class (liftMaybe)
import Control.Monad.Except.Trans (ExceptT(ExceptT), except, runExceptT)
import Control.Monad.Logger.Class (trace) as Logger
import Ctl.Internal.BalanceTx.CoinSelection
  ( SelectionState
  , SelectionStrategy
  , _leftoverUtxos
  , performMultiAssetSelection
  , selectedInputs
  )
import Ctl.Internal.BalanceTx.Collateral
  ( addTxCollateral
  , addTxCollateralReturn
  )
import Ctl.Internal.BalanceTx.Constraints (BalanceTxConstraintsBuilder)
import Ctl.Internal.BalanceTx.Constraints
  ( _changeAddress
  , _maxChangeOutputTokenQuantity
  , _nonSpendableInputs
  , _selectionStrategy
  , _srcAddresses
  ) as Constraints
import Ctl.Internal.BalanceTx.Error
  ( Actual(Actual)
  , BalanceTxError
      ( CouldNotGetChangeAddress
      , CouldNotGetCollateral
      , CouldNotGetUtxos
      , ExUnitsEvaluationFailed
      , InsufficientTxInputs
      , ReindexRedeemersError
      , UtxoLookupFailedFor
      , UtxoMinAdaValueCalculationFailed
      )
  , Expected(Expected)
  , printTxEvaluationFailure
  ) as BalanceTxErrorExport
import Ctl.Internal.BalanceTx.Error
  ( BalanceTxError
      ( CouldNotGetChangeAddress
      , CouldNotGetCollateral
      , CouldNotGetUtxos
      , UtxoLookupFailedFor
      , UtxoMinAdaValueCalculationFailed
      )
  )
import Ctl.Internal.BalanceTx.ExUnitsAndMinFee
  ( evalExUnitsAndMinFee
  , finalizeTransaction
  )
import Ctl.Internal.BalanceTx.Helpers
  ( _body'
  , _redeemersTxIns
  , _transaction'
  , _unbalancedTx
  )
import Ctl.Internal.BalanceTx.Types
  ( BalanceTxM
  , FinalizedTransaction
  , PrebalancedTransaction
  , askCip30Wallet
  , askCoinsPerUtxoUnit
  , askNetworkId
  , asksConstraints
  , liftEitherQueryM
  , liftQueryM
  , withBalanceTxConstraints
  )
import Ctl.Internal.BalanceTx.Types (FinalizedTransaction(FinalizedTransaction)) as FinalizedTransaction
import Ctl.Internal.BalanceTx.UtxoMinAda (utxoMinAdaValue)
import Ctl.Internal.Cardano.Types.Transaction
  ( Certificate(StakeRegistration, StakeDeregistration)
  , Transaction(Transaction)
  , TransactionOutput(TransactionOutput)
  , TxBody
  , UtxoMap
  , _body
  , _certs
  , _fee
  , _inputs
  , _mint
  , _networkId
  , _outputs
  , _referenceInputs
  , _withdrawals
  )
import Ctl.Internal.Cardano.Types.Value
  ( AssetClass
  , Coin(Coin)
  , Value(Value)
  , coinToValue
  , equipartitionValueWithTokenQuantityUpperBound
  , getNonAdaAsset
  , lovelaceValueOf
  , minus
  , mkValue
  , posNonAdaAsset
  , valueToCoin'
  )
import Ctl.Internal.Cardano.Types.Value
  ( assetToValue
  , getAssetQuantity
  , valueAssets
  ) as Value
import Ctl.Internal.Helpers ((??))
import Ctl.Internal.Partition (equipartition, partition)
import Ctl.Internal.QueryM (QueryM, getProtocolParameters)
import Ctl.Internal.QueryM (getChangeAddress, getWalletAddresses) as QueryM
import Ctl.Internal.QueryM.Utxos
  ( filterLockedUtxos
  , getWalletCollateral
  , utxosAt
  )
import Ctl.Internal.Serialization.Address (Address)
import Ctl.Internal.Types.OutputDatum (OutputDatum(NoOutputDatum))
import Ctl.Internal.Types.ScriptLookups (UnattachedUnbalancedTx)
import Ctl.Internal.Types.Transaction (TransactionInput)
import Ctl.Internal.Types.UnbalancedTransaction (_utxoIndex)
import Data.Array as Array
import Data.Array.NonEmpty (NonEmptyArray)
import Data.Array.NonEmpty
  ( cons'
  , fromArray
  , replicate
  , singleton
  , sortWith
  , toArray
  , uncons
  , zip
  , zipWith
  ) as NEArray
import Data.BigInt (BigInt)
import Data.Either (Either, note)
import Data.Foldable (fold, foldMap, foldr, length, sum)
import Data.Function (on)
import Data.Lens.Getter ((^.))
import Data.Lens.Setter ((%~), (.~), (?~))
import Data.Log.Tag (TagSet)
import Data.Log.Tag (fromArray, tag) as TagSet
import Data.Map (empty, filterKeys, lookup, union) as Map
import Data.Maybe (Maybe(Nothing, Just), fromJust, fromMaybe, isJust, maybe)
import Data.Newtype (class Newtype, unwrap, wrap)
import Data.Set (Set)
import Data.Set as Set
import Data.Traversable (for, traverse)
import Data.Tuple (fst, snd)
import Data.Tuple.Nested (type (/\), (/\))
import Effect.Class (liftEffect)
import Partial.Unsafe (unsafePartial)

-- | Balances an unbalanced transaction using the specified balancer
-- | constraints.
balanceTxWithConstraints
  :: UnattachedUnbalancedTx
  -> BalanceTxConstraintsBuilder
  -> QueryM (Either BalanceTxError FinalizedTransaction)
balanceTxWithConstraints unbalancedTx constraintsBuilder = do
  pparams <- getProtocolParameters

  withBalanceTxConstraints constraintsBuilder $ runExceptT do
    let
      depositValuePerCert = (unwrap pparams).stakeAddressDeposit
      certsFee = getStakingBalance (unbalancedTx ^. _transaction')
        depositValuePerCert

    srcAddrs <-
      asksConstraints Constraints._srcAddresses
        >>= maybe (liftQueryM QueryM.getWalletAddresses) pure

    changeAddr <- getChangeAddress

    utxos <- liftEitherQueryM $ traverse utxosAt srcAddrs <#>
      traverse (note CouldNotGetUtxos) -- Maybe -> Either and unwrap UtxoM

        >>> map (foldr Map.union Map.empty) -- merge all utxos into one map

    unbalancedCollTx <-
      case Array.null (unbalancedTx ^. _redeemersTxIns) of
        true ->
          -- Don't set collateral if tx doesn't contain phase-2 scripts:
          unbalancedTxWithNetworkId
        false ->
          setTransactionCollateral changeAddr =<< unbalancedTxWithNetworkId
    let
      allUtxos :: UtxoMap
      allUtxos =
        -- Combine utxos at the user address and those from any scripts
        -- involved with the contract in the unbalanced transaction:
        utxos `Map.union` (unbalancedTx ^. _unbalancedTx <<< _utxoIndex)

    availableUtxos <- liftQueryM $ filterLockedUtxos allUtxos

    selectionStrategy <- asksConstraints Constraints._selectionStrategy

    -- Balance and finalize the transaction:
    runBalancer selectionStrategy allUtxos availableUtxos changeAddr certsFee
      (unbalancedTx # _transaction' .~ unbalancedCollTx)
  where
  getChangeAddress :: BalanceTxM Address
  getChangeAddress =
    liftMaybe CouldNotGetChangeAddress
      =<< maybe (liftQueryM QueryM.getChangeAddress) (pure <<< Just)
      =<< asksConstraints Constraints._changeAddress

  unbalancedTxWithNetworkId :: BalanceTxM Transaction
  unbalancedTxWithNetworkId = do
    let transaction = unbalancedTx ^. _transaction'
    networkId <- maybe askNetworkId pure (transaction ^. _body <<< _networkId)
    pure (transaction # _body <<< _networkId ?~ networkId)

  setTransactionCollateral :: Address -> Transaction -> BalanceTxM Transaction
  setTransactionCollateral changeAddr transaction = do
    collateral <-
      liftEitherQueryM $ note CouldNotGetCollateral <$> getWalletCollateral
    let collaterisedTx = addTxCollateral collateral transaction
    -- Don't mess with Cip30 collateral
    isCip30 <- isJust <$> askCip30Wallet
    if isCip30 then pure collaterisedTx
    else addTxCollateralReturn collateral collaterisedTx changeAddr

--------------------------------------------------------------------------------
-- Balancing Algorithm
--------------------------------------------------------------------------------

type BalancerState =
  { unbalancedTx :: UnattachedUnbalancedTx
  , changeOutputs :: Array TransactionOutput
  , leftoverUtxos :: UtxoMap
  }

runBalancer
  :: SelectionStrategy
  -> UtxoMap
  -> UtxoMap
  -> Address
  -> Coin
  -> UnattachedUnbalancedTx
  -> BalanceTxM FinalizedTransaction
runBalancer strategy allUtxos utxos changeAddress certsFee unbalancedTx' = do
  spendableUtxos <- getSpendableUtxos
  addLovelacesToTransactionOutputs unbalancedTx'
    >>= ((\tx -> mkBalancerState tx mempty spendableUtxos) >>> prebalanceTx)
  where
  getSpendableUtxos :: BalanceTxM UtxoMap
  getSpendableUtxos =
    asksConstraints Constraints._nonSpendableInputs <#>
      \nonSpendableInputs ->
        Map.filterKeys (not <<< flip Set.member nonSpendableInputs) utxos

  runNextBalancingStep
    :: UnattachedUnbalancedTx -> UtxoMap -> BalanceTxM FinalizedTransaction
  runNextBalancingStep unbalancedTx leftoverUtxos = do
    let txBody = unbalancedTx ^. _body'
    inputValue <- except $ getInputValue allUtxos txBody
    changeOutputs <- makeChange changeAddress inputValue certsFee txBody

    requiredValue <-
      except $ getRequiredValue certsFee utxos
        (setTxChangeOutputs changeOutputs unbalancedTx ^. _body')

    { unbalancedTx, changeOutputs, leftoverUtxos } #
      if requiredValue == mempty then balanceChangeAndMinFee else prebalanceTx

  prebalanceTx :: BalancerState -> BalanceTxM FinalizedTransaction
  prebalanceTx state@{ unbalancedTx, changeOutputs, leftoverUtxos } = do
    logBalancerState "Pre-balancing (Stage 1)" utxos state

    performCoinSelection >>= \selectionState ->
      let
        leftoverUtxos' :: UtxoMap
        leftoverUtxos' = selectionState ^. _leftoverUtxos

        selectedInputs' :: Set TransactionInput
        selectedInputs' = selectedInputs selectionState

        unbalancedTxWithInputs :: UnattachedUnbalancedTx
        unbalancedTxWithInputs =
          unbalancedTx # _body' <<< _inputs %~ Set.union selectedInputs'
      in
        runNextBalancingStep unbalancedTxWithInputs leftoverUtxos'
    where
    performCoinSelection :: BalanceTxM SelectionState
    performCoinSelection =
      let
        txBody :: TxBody
        txBody = setTxChangeOutputs changeOutputs unbalancedTx ^. _body'
      in
        except (getRequiredValue certsFee utxos txBody)
          >>= performMultiAssetSelection strategy leftoverUtxos

  balanceChangeAndMinFee :: BalancerState -> BalanceTxM FinalizedTransaction
  balanceChangeAndMinFee
    state@{ unbalancedTx, changeOutputs, leftoverUtxos } = do
    logBalancerState "Balancing change and fees (Stage 2)" utxos state
    let
      prebalancedTx :: PrebalancedTransaction
      prebalancedTx = wrap $ setTxChangeOutputs changeOutputs unbalancedTx

      minFee :: BigInt
      minFee = unwrap $ unbalancedTx ^. _body' <<< _fee

    balancedTx /\ newMinFee <- evalExUnitsAndMinFee prebalancedTx allUtxos

    case newMinFee <= minFee of
      true ->
        finalizeTransaction balancedTx allUtxos
          <* logTransaction "Balanced transaction (Done)" utxos balancedTx
      false ->
        let
          unbalancedTxWithMinFee :: UnattachedUnbalancedTx
          unbalancedTxWithMinFee =
            unbalancedTx # _body' <<< _fee .~ Coin newMinFee
        in
          runNextBalancingStep unbalancedTxWithMinFee leftoverUtxos

-- | For each transaction output, if necessary, adds some number of lovelaces
-- | to cover the utxo min-ada-value requirement.
addLovelacesToTransactionOutputs
  :: UnattachedUnbalancedTx -> BalanceTxM UnattachedUnbalancedTx
addLovelacesToTransactionOutputs unbalancedTx =
  map (\txOutputs -> unbalancedTx # _body' <<< _outputs .~ txOutputs) $
    traverse addLovelacesToTransactionOutput
      (unbalancedTx ^. _body' <<< _outputs)

addLovelacesToTransactionOutput
  :: TransactionOutput -> BalanceTxM TransactionOutput
addLovelacesToTransactionOutput txOutput = do
  coinsPerUtxoUnit <- askCoinsPerUtxoUnit
  txOutputMinAda <-
    ExceptT $ liftEffect $ utxoMinAdaValue coinsPerUtxoUnit txOutput
      <#> note UtxoMinAdaValueCalculationFailed
  let
    txOutputRec = unwrap txOutput

    txOutputValue :: Value
    txOutputValue = txOutputRec.amount

    newCoin :: Coin
    newCoin = Coin $ max (valueToCoin' txOutputValue) txOutputMinAda

  pure $ wrap txOutputRec
    { amount = mkValue newCoin (getNonAdaAsset txOutputValue) }

setTxChangeOutputs
  :: Array TransactionOutput -> UnattachedUnbalancedTx -> UnattachedUnbalancedTx
setTxChangeOutputs outputs = _body' <<< _outputs %~ flip append outputs

--------------------------------------------------------------------------------
-- Making change
--------------------------------------------------------------------------------

makeChange
  :: Address -> Value -> Coin -> TxBody -> BalanceTxM (Array TransactionOutput)
makeChange changeAddress inputValue certsFee txBody =
  map (mkChangeOutput changeAddress) <$>
    ( assignCoinsToChangeValues changeAddress excessCoin
        =<< splitOversizedValues changeValueOutputCoinPairs
    )
  where
  changeValueOutputCoinPairs :: NonEmptyArray (Value /\ BigInt)
  changeValueOutputCoinPairs = outputCoins
    # NEArray.zip changeForAssets
    # NEArray.sortWith (AssetCount <<< fst)

  splitOversizedValues
    :: NonEmptyArray (Value /\ BigInt)
    -> BalanceTxM (NonEmptyArray (Value /\ BigInt))
  splitOversizedValues pairs =
    asksConstraints Constraints._maxChangeOutputTokenQuantity <#> case _ of
      Nothing -> pairs
      Just maxTokenQuantity ->
        unbundle <$>
          ( equipartitionValueWithTokenQuantityUpperBound maxTokenQuantity
              =<< map bundle pairs
          )
    where
    bundle :: Value /\ BigInt -> Value
    bundle (Value _ assets /\ coin) = mkValue (wrap coin) assets

    unbundle :: Value -> Value /\ BigInt
    unbundle (Value coin assets) = mkValue mempty assets /\ unwrap coin

  changeForAssets :: NonEmptyArray Value
  changeForAssets = foldr
    (NEArray.zipWith (<>) <<< makeChangeForAsset txOutputs)
    (NEArray.replicate (length txOutputs) mempty)
    excessAssets

  outputCoins :: NonEmptyArray BigInt
  outputCoins =
    NEArray.fromArray (valueToCoin' <<< _.amount <<< unwrap <$> txOutputs)
      ?? NEArray.singleton zero

  txOutputs :: Array TransactionOutput
  txOutputs = txBody ^. _outputs

  excessAssets :: Array (AssetClass /\ BigInt)
  excessAssets = Value.valueAssets excessValue

  excessCoin :: BigInt
  excessCoin = valueToCoin' excessValue

  excessValue :: Value
  excessValue = posValue $
    (inputValue <> mintValue txBody) `minus`
      (outputValue txBody <> minFeeValue txBody <> coinToValue certsFee)

  posValue :: Value -> Value
  posValue (Value (Coin coin) nonAdaAsset) =
    mkValue (Coin $ max coin zero) (posNonAdaAsset nonAdaAsset)

makeChangeForAsset
  :: Array TransactionOutput -> (AssetClass /\ BigInt) -> NonEmptyArray Value
makeChangeForAsset txOutputs (assetClass /\ excess) =
  Value.assetToValue assetClass <$>
    partition excess weights ?? equipartition excess (length weights)
  where
  weights :: NonEmptyArray BigInt
  weights = NEArray.fromArray assetQuantities ?? NEArray.singleton one

  assetQuantities :: Array BigInt
  assetQuantities =
    txOutputs <#> Value.getAssetQuantity assetClass <<< _.amount <<< unwrap

makeChangeForCoin :: NonEmptyArray BigInt -> BigInt -> NonEmptyArray Value
makeChangeForCoin weights excess =
  lovelaceValueOf <$>
    partition excess weights ?? equipartition excess (length weights)

assignCoinsToChangeValues
  :: Address
  -> BigInt
  -> NonEmptyArray (Value /\ BigInt)
  -> BalanceTxM (Array Value)
assignCoinsToChangeValues changeAddress adaAvailable pairsAtStart =
  flip worker pairsAtStart =<< adaRequiredAtStart
  where
  worker
    :: BigInt
    -> NonEmptyArray (Value /\ BigInt)
    -> BalanceTxM (Array Value)
  worker adaRequired = NEArray.uncons >>> case _ of
    { head: pair, tail: [] } | noTokens pair && adaAvailable < adaRequired ->
      pure mempty

    { head: pair, tail: pairs } | noTokens pair && adaAvailable < adaRequired ->
      minCoinFor (fst pair) >>= \minCoin ->
        worker (adaRequired - minCoin) (fromArrayUnsafe pairs)

    { head, tail } -> do
      let
        pairs :: NonEmptyArray (Value /\ BigInt)
        pairs = NEArray.cons' head tail

        adaRemaining :: BigInt
        adaRemaining = max zero (adaAvailable - adaRequired)

        changeValuesForOutputCoins :: NonEmptyArray Value
        changeValuesForOutputCoins =
          makeChangeForCoin (snd <$> pairs) adaRemaining

      changeValuesWithMinCoins <- traverse (assignMinimumCoin <<< fst) pairs
      pure $ NEArray.toArray $
        NEArray.zipWith (<>) changeValuesWithMinCoins changeValuesForOutputCoins
    where
    assignMinimumCoin :: Value -> BalanceTxM Value
    assignMinimumCoin value@(Value _ assets) =
      flip mkValue assets <<< wrap <$> minCoinFor value

    fromArrayUnsafe :: forall (a :: Type). Array a -> NonEmptyArray a
    fromArrayUnsafe = unsafePartial fromJust <<< NEArray.fromArray

    noTokens :: Value /\ BigInt -> Boolean
    noTokens = Array.null <<< Value.valueAssets <<< fst

  adaRequiredAtStart :: BalanceTxM BigInt
  adaRequiredAtStart =
    foldr (+) zero <$> traverse (minCoinFor <<< fst) pairsAtStart

  minCoinFor :: Value -> BalanceTxM BigInt
  minCoinFor value = do
    let txOutput = mkChangeOutput changeAddress value
    coinsPerUtxoUnit <- askCoinsPerUtxoUnit
    ExceptT $ liftEffect $ utxoMinAdaValue coinsPerUtxoUnit txOutput
      <#> note UtxoMinAdaValueCalculationFailed

newtype AssetCount = AssetCount Value

derive instance Newtype AssetCount _
derive newtype instance Eq AssetCount

instance Ord AssetCount where
  compare = compare `on` (Array.length <<< Value.valueAssets <<< unwrap)

mkChangeOutput :: Address -> Value -> TransactionOutput
mkChangeOutput changeAddress amount = wrap
  { address: changeAddress, amount, datum: NoOutputDatum, scriptRef: Nothing }

--------------------------------------------------------------------------------
-- Getters for various `Value`s
--------------------------------------------------------------------------------

getRequiredValue :: Coin -> UtxoMap -> TxBody -> Either BalanceTxError Value
getRequiredValue certsFee utxos txBody =
  getInputValue utxos txBody <#> \inputValue ->
    (outputValue txBody <> minFeeValue txBody <> coinToValue certsFee)
      `minus` (inputValue <> mintValue txBody)

getAmount :: TransactionOutput -> Value
getAmount = _.amount <<< unwrap

getInputValue :: UtxoMap -> TxBody -> Either BalanceTxError Value
getInputValue utxos txBody =
  foldMap getAmount <$>
    for (Array.fromFoldable $ txBody ^. _inputs) \oref ->
      note (UtxoLookupFailedFor oref) (Map.lookup oref utxos)

outputValue :: TxBody -> Value
outputValue txBody = foldMap getAmount (txBody ^. _outputs)

minFeeValue :: TxBody -> Value
minFeeValue txBody = mkValue (txBody ^. _fee) mempty

mintValue :: TxBody -> Value
mintValue txBody = maybe mempty (mkValue mempty <<< unwrap) (txBody ^. _mint)

-- | Accounts for:
-- |
-- | - stake registration deposit
-- | - stake deregistration deposit returns
-- | - stake withdrawals fees
getStakingBalance :: Transaction -> Coin -> Coin
getStakingBalance tx depositLovelacesPerCert =
  let
    stakeDeposits :: BigInt
    stakeDeposits =
      (tx ^. _body <<< _certs) # fold
        >>> map
          case _ of
            StakeRegistration _ -> unwrap depositLovelacesPerCert
            StakeDeregistration _ -> negate $ unwrap depositLovelacesPerCert
            _ -> zero
        >>> sum
    stakeWithdrawals =
      unwrap $ fold $ fromMaybe Map.empty $ tx ^. _body <<<
        _withdrawals
    fee = stakeDeposits - stakeWithdrawals
  in
    Coin fee

--------------------------------------------------------------------------------
-- Helpers
--------------------------------------------------------------------------------

mkBalancerState
  :: UnattachedUnbalancedTx
  -> Array TransactionOutput
  -> UtxoMap
  -> BalancerState
mkBalancerState unbalancedTx changeOutputs leftoverUtxos =
  { unbalancedTx, changeOutputs, leftoverUtxos }

logBalancerState :: String -> UtxoMap -> BalancerState -> BalanceTxM Unit
logBalancerState message utxos { unbalancedTx, changeOutputs } =
  logTransactionWithChange message utxos (Just changeOutputs) unbalancedTx

logTransaction
  :: String -> UtxoMap -> UnattachedUnbalancedTx -> BalanceTxM Unit
logTransaction message utxos =
  logTransactionWithChange message utxos Nothing

logTransactionWithChange
  :: String
  -> UtxoMap
  -> Maybe (Array TransactionOutput)
  -> UnattachedUnbalancedTx
  -> BalanceTxM Unit
logTransactionWithChange message utxos mChangeOutputs unbalancedTx =
  let
    txBody :: TxBody
    txBody = unbalancedTx ^. _body'

    tag :: forall (a :: Type). Show a => String -> a -> TagSet
    tag title = TagSet.tag title <<< show

    outputValuesTagSet :: Maybe (Array TransactionOutput) -> Array TagSet
    outputValuesTagSet Nothing =
      [ "Output Value" `tag` outputValue txBody ]
    outputValuesTagSet (Just changeOutputs) =
      [ "Output Value without change" `tag` outputValue txBody
      , "Change Value" `tag` foldMap getAmount changeOutputs
      ]

    transactionInfo :: Value -> TagSet
    transactionInfo inputValue =
      TagSet.fromArray $
        [ "Input Value" `tag` inputValue
        , "Mint Value" `tag` mintValue txBody
        , "Fees" `tag` (txBody ^. _fee)
        ] <> outputValuesTagSet mChangeOutputs
  in
    except (getInputValue utxos txBody)
      >>= (flip Logger.trace (message <> ":") <<< transactionInfo)

