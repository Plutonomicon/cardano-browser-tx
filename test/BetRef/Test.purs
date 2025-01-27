module Test.Ctl.BetRef.Test
  ( multipleBetsWallets
  , placeBetSuite
  , takePotSuite
  ) where

import Cardano.Types (Transaction, TransactionHash, _body, _fee)
import Cardano.Types.BigNum as BigNum
import Cardano.Types.Coin (Coin(Coin))
import Cardano.Types.Credential
  ( Credential(PubKeyHashCredential, ScriptHashCredential)
  )
import Cardano.Types.PlutusScript (PlutusScript, hash)
import Cardano.Types.ScriptHash (ScriptHash)
import Cardano.Types.ScriptRef (ScriptRef(PlutusScriptRef), getPlutusScript)
import Cardano.Types.Value as Value
import Cardano.Wallet.Key
  ( KeyWallet
  , getPrivatePaymentKey
  , getPrivateStakeKey
  , privateKeyToPkh
  , privateKeysToAddress
  )
import Contract.Address
  ( Address
  , PaymentPubKeyHash
  , StakePubKeyHash
  , getNetworkId
  , mkAddress
  )
import Contract.Chain (currentSlot, waitUntilSlot)
import Contract.Log (logInfo')
import Contract.Monad (Contract)
import Contract.PlutusData (PlutusData, toData)
import Contract.Prelude
  ( type (/\)
  , Either(Left, Right)
  , Maybe(Nothing, Just)
  , for
  , isRight
  , liftAff
  , liftEffect
  , liftEither
  , liftM
  , mconcat
  , unwrap
  , wrap
  , (/\)
  )
import Contract.ScriptLookups (ScriptLookups, validator)
import Contract.Test (ContractTest, InitialUTxOs, withKeyWallet, withWallets)
import Contract.Test.Assert
  ( checkLossAtAddress
  , collectAssertionFailures
  , label
  )
import Contract.Time (getEraSummaries, getSystemStart, posixTimeToSlot)
import Contract.Transaction
  ( TransactionInput
  , TransactionOutput
  , awaitTxConfirmed
  , balanceTx
  , signTransaction
  , submit
  )
import Contract.TxConstraints
  ( DatumPresence(DatumInline)
  , TxConstraints
  , mustPayToPubKeyWithDatum
  , mustPayToPubKeyWithScriptRef
  )
import Contract.UnbalancedTx (mkUnbalancedTx)
import Contract.Utxos (utxosAt)
import Contract.Value (Value, empty, lovelaceValueOf, valueToCoin)
import Control.Monad.Error.Class (liftMaybe, throwError)
import Control.Monad.Trans.Class (lift)
import Ctl.Internal.Contract.Monad (getQueryHandle)
import Ctl.Internal.Service.Error (pprintClientError)
import Data.Array (cons, fromFoldable, head, uncons, zip)
import Data.Bifunctor (lmap)
import Data.Either (isLeft)
import Data.Lens (view)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (fromJust)
import Data.Set as Set
import Debug (trace)
import Effect.Exception (error, throw)
import JS.BigInt (BigInt)
import JS.BigInt as BigInt
import Mote (test)
import Mote.TestPlanM (TestPlanM)
import Partial.Unsafe (unsafePartial)
import Prelude
  ( Unit
  , bind
  , discard
  , flip
  , map
  , mempty
  , pure
  , show
  , unit
  , (#)
  , ($)
  , (&&)
  , (+)
  , (<$>)
  , (<<<)
  , (<>)
  , (==)
  )
import Test.Ctl.BetRef.BetRefValidator (mkScript)
import Test.Ctl.BetRef.Operations (placeBet, takePot)
import Test.Ctl.BetRef.Types
  ( BetRefParams
  , OracleAnswerDatum(OracleAnswerDatum)
  , mkParams
  )
import Test.Spec.Assertions (shouldEqual, shouldSatisfy)

placeBetSuite :: TestPlanM ContractTest Unit
placeBetSuite = do
  test "Placing first bet" firstBetTest'
  test "Multiple bets - good steps" multipleBetsTest
  test "Multiple bets - to small step" failingMultipleBetsTest

takePotSuite :: TestPlanM ContractTest Unit
takePotSuite = do
  test "Just take bet pot" takeBetsTest
  test "Take by wrong guesser" wrongGuesserTakeBetsTest
  test "The first bet matters" badUpdatedGuessTakeBetsTest

-- -----------------------------------------------------------------------------
-- Place bids
-- -----------------------------------------------------------------------------

firstBetTest' :: ContractTest
firstBetTest' = withWallets ws $ firstBetTest
  40
  100
  200_000_000 -- bet step
  (OracleAnswerDatum $ BigInt.fromInt 1) -- guess
  20_000_000 -- bet value
  where
  ws =
    [ BigNum.fromInt 500_000_000 ] -- oracle

      /\ [ BigNum.fromInt 500_000_000 ] -- ref script deployer
      /\ [ BigNum.fromInt 500_000_000 ] -- ref script holder
      /\ [ BigNum.fromInt 500_000_000 ] -- bettor

multipleBetsTest :: ContractTest
multipleBetsTest = withWallets multipleBetsWallets $
  \(oracle /\ deployer /\ holder /\ bettor1 /\ bettor2 /\ bettor3 /\ bettor4) ->
    mkMultipleBetsTest
      400
      1_000
      10_000_000
      [ (bettor1 /\ mkGuess 1 /\ 10_000_000)
      , (bettor2 /\ mkGuess 2 /\ 20_000_000)
      , (bettor3 /\ mkGuess 3 /\ 30_000_000)
      , (bettor2 /\ mkGuess 4 /\ 50_000_000)
      , (bettor4 /\ mkGuess 5 /\ 65_000_000)
      -- CTL: no support for test tokens out-of-the-box, so... <> valueSingleton testGoldAsset 1_000
      ]
      (oracle /\ deployer /\ holder)

failingMultipleBetsTest :: ContractTest
failingMultipleBetsTest = withWallets multipleBetsWallets $
  \(oracle /\ deployer /\ holder /\ bettor1 /\ bettor2 /\ bettor3 /\ bettor4) ->
    do
      ret /\ _ <- collectAssertionFailures mempty $ lift do
        mkMultipleBetsTest
          400
          1_000
          10_000_000
          [ (bettor1 /\ mkGuess 1 /\ 10_000_000)
          , (bettor2 /\ mkGuess 2 /\ 20_000_000)
          , (bettor3 /\ mkGuess 3 /\ 30_000_000)
          , (bettor2 /\ mkGuess 4 /\ 50_000_000)
          , (bettor4 /\ mkGuess 5 /\ 55_000_000)
          -- CTL: no support for test tokens out-of-the-box, so... <> valueSingleton testGoldAsset 1_000
          ]
          (oracle /\ deployer /\ holder)
      ret `shouldSatisfy` isLeft

-- -----------------------------------------------------------------------------
-- helpers for multiple bet tests
-- -----------------------------------------------------------------------------

mkGuess :: Int -> OracleAnswerDatum
mkGuess = OracleAnswerDatum <<< BigInt.fromInt

multipleBetsWallets
  :: InitialUTxOs /\ InitialUTxOs /\ InitialUTxOs /\ InitialUTxOs
       /\ InitialUTxOs
       /\ InitialUTxOs
       /\ InitialUTxOs
multipleBetsWallets =
  [ BigNum.fromInt 500_000_000 ] -- oracle

    /\ [ BigNum.fromInt 500_000_000 ] -- ref script deployer
    /\ [ BigNum.fromInt 500_000_000 ] -- ref script holder
    /\ [ BigNum.fromInt 500_000_000 ] -- bettor 1
    /\ [ BigNum.fromInt 500_000_000 ] -- bettor 2
    /\ [ BigNum.fromInt 500_000_000 ] -- bettor 3
    /\ [ BigNum.fromInt 500_000_000 ] -- bettor 4

-- -----------------------------------------------------------------------------

type Bet = (KeyWallet /\ OracleAnswerDatum /\ Int)

mkMultipleBetsTest
  :: Int
  -> Int
  -> Int
  -> Array Bet
  -> (KeyWallet /\ KeyWallet /\ KeyWallet)
  -> Contract Unit
mkMultipleBetsTest
  betUntil
  betReveal
  stepCoins
  bets
  wallets = do
  -- Deploy ref script
  (params /\ oRef /\ script) <- runDeployScript
    (BigInt.fromInt betUntil)
    (BigInt.fromInt betReveal)
    (lovelaceValueOf $ BigNum.fromInt stepCoins)
    wallets

  bets' <- liftAff $ for bets $ \(w /\ a /\ v) -> do
    bettorKey <- getPrivatePaymentKey w
    let bettorPkh = (wrap <<< privateKeyToPkh) bettorKey
    pure (bettorPkh /\ a /\ v)

  -- Get the balance
  balanceBefore <- getBalance bets'
  logInfo' $ "balanceBeforeAllTheseOps: " <> show balanceBefore

  -- Run operations
  runMultipleBets params oRef script bets

  -- Get the balance again
  balanceAfter <- getBalance bets'
  logInfo' $ "balanceAfterAllTheseOps: " <> show balanceAfter

  -- Check the difference
  verify $ zip (unsafePartial $ walletsAndBets bets') $ zip balanceBefore
    balanceAfter

  where

  -- \| Returns the balances for all wallets that play the game
  getBalance
    :: Array (PaymentPubKeyHash /\ OracleAnswerDatum /\ Int)
    -> Contract (Array Value)
  getBalance bets' = for (unsafePartial $ walletsAndBets bets') $ \(pkh /\ _) ->
    do
      addr <- mkAddress' pkh Nothing
      queryHandle <- getQueryHandle
      eiResponse <- liftAff $ queryHandle.utxosAt addr
      case eiResponse of
        Left err -> liftEffect $ throw $
          "getWalletBalance: utxosAt call error: " <>
            pprintClientError err
        Right utxoMap -> do
          liftM
            ( error $
                "getWalletBalance: Unable to get payment credential from Address"
            )
            $ Value.sum
                ( map _.amount $ map unwrap $ fromFoldable $
                    Map.values utxoMap
                )

  -- \| Builds the list of wallets and their respective bets made.
  -- The idea here is that if we encounter a new wallet,
  -- i.e., wallet for whose we haven't yet computed value lost,
  -- we calculate the total once so we can ignore other entries
  -- for this wallet.
  -- FIXME: mention that we are working with positive values
  walletsAndBets
    :: Partial
    => Array (PaymentPubKeyHash /\ OracleAnswerDatum /\ Int)
    -> Array (PaymentPubKeyHash /\ Value)
  walletsAndBets bets' = go bets' Set.empty []
    where
    go allBets set acc = case uncons allBets of
      Just { head: bet, tail: remBets } ->
        let
          (wallet /\ _ /\ _) = bet
        in
          if Set.member wallet set then go remBets set acc -- already summed
          else
            go remBets (Set.insert wallet set)
              ((wallet /\ totalBets wallet allBets Value.empty) `cons` acc)
      Nothing -> acc

  -- \| Recursive function that sums all bets for the corresponding wallet.
  totalBets
    :: Partial
    => PaymentPubKeyHash
    -> Array (PaymentPubKeyHash /\ OracleAnswerDatum /\ Int)
    -> Value
    -> Value
  totalBets wallet allBets acc = case uncons allBets of
    Nothing -> acc
    Just { head: (wallet' /\ _ /\ bet), tail: remBets } ->
      let
        bet' = lovelaceValueOf $ BigNum.fromInt bet
      in
        totalBets wallet remBets $
          if wallet' == wallet then fromJust (acc `Value.add` bet')
          else acc

  -- \| Function to verify that the wallet indeed lost by /roughly/ the bet amount.
  -- We say /roughly/ as fees is assumed to be within (0, 1 ada].
  verify
    :: Array ((PaymentPubKeyHash /\ Value) /\ Value /\ Value) -> Contract Unit
  verify es = case uncons es of
    Nothing -> pure unit
    Just { head: ((pkh /\ diff) /\ vBefore /\ vAfter), tail: rest } -> do
      -- logInfo' $ "diff: " <> show diff
      -- logInfo' $ "vBefore: " <> show vBefore
      -- logInfo' $ "vAfter: " <> show vAfter
      let
        vAfterWithoutFees = unsafePartial $ fromJust $ vBefore `Value.minus`
          diff
        threshold = lovelaceValueOf $ BigNum.fromInt 1_500_000 -- 1.5 ada
      if
        vAfter `Value.lt` vAfterWithoutFees
          &&
            vAfter `Value.geq`
              ( unsafePartial $ fromJust $ vAfterWithoutFees `Value.minus`
                  threshold
              ) then verify rest
      else
        throwError $ error $ "For wallet " <> show pkh
          <> " expected value (without fees) "
          <> show vAfterWithoutFees
          <> ", but actual is "
          <> show vAfter

runMultipleBets
  :: BetRefParams
  -> TransactionInput
  -> PlutusScript
  -> Array Bet
  -> Contract Unit
runMultipleBets params oRef script bets = go bets true
  where
  go bs isFirst = case uncons bs of
    Just { head: (bettor /\ guess /\ betCoins), tail: bs' } -> do
      -- Some additionals
      bettorKey <- liftAff $ getPrivatePaymentKey bettor
      let bettorPkh = (wrap <<< privateKeyToPkh) bettorKey
      let betValue = lovelaceValueOf $ BigNum.fromInt betCoins

      -- Handle the bet
      if isFirst then do
        logInfo' "placing the first bet"
        withKeyWallet bettor do
          _ <- runPlaceBet oRef script params guess betValue Nothing bettorPkh
          pure unit
      else do
        logInfo' "placing a next bet"
        -- need to get previous bet utxo. here we just try to pick the first one
        -- since it should be always one
        address <- mkAddress (wrap $ ScriptHashCredential $ hash script) Nothing
        utxoMap <- utxosAt address
        prevUtxoRef <- liftMaybe (error "cannot find previous bet utxo")
          $ (head <<< Set.toUnfoldable <<< Map.keys) utxoMap
        logInfo' $ "previous bet utxo:  " <> show prevUtxoRef
        withKeyWallet bettor do
          _ <- runPlaceBet oRef script params guess betValue
            (Just prevUtxoRef)
            bettorPkh
          pure unit

      -- Handle the rest
      go bs' false
    Nothing -> pure unit

-- -----------------------------------------------------------------------------

firstBetTest
  :: Int
  -> Int
  -> Int
  -> OracleAnswerDatum
  -> Int
  -> KeyWallet /\ KeyWallet /\ KeyWallet /\ KeyWallet
  -> Contract Unit
firstBetTest
  betUntil
  betReveal
  stepCoins
  guess
  betCoins'
  (oracle /\ deployer /\ holder /\ bettor) = do
  -- Deploy ref script
  (params /\ oRef /\ script) <- runDeployScript
    (BigInt.fromInt betUntil)
    (BigInt.fromInt betReveal)
    (lovelaceValueOf $ BigNum.fromInt stepCoins)
    (oracle /\ deployer /\ holder)

  logInfo' $ "BetRefParams: " <> show params
  logInfo' $ "Ref script oRef: " <> show oRef

  -- Build test checks
  let betCoins = BigNum.fromInt betCoins'

  bettorKey <- liftAff $ getPrivatePaymentKey bettor
  let bettorPkh = (wrap <<< privateKeyToPkh) bettorKey
  mBettorSKey <- liftAff $ getPrivateStakeKey bettor
  let mBettorSPkh = (wrap <<< privateKeyToPkh) <$> mBettorSKey
  bettorAddress <- mkAddress' bettorPkh mBettorSPkh

  let
    checks =
      [ checkLossAtAddress (label bettorAddress "Bettor")
          case _ of
            Just { txFinalFee } -> pure
              ( BigNum.toBigInt betCoins + (BigNum.toBigInt <<< unwrap)
                  txFinalFee
              )
            Nothing -> liftEffect $
              throw "Unable to estimate expected loss in wallet"
      ]

  -- Place bet
  eiResult /\ failures <- collectAssertionFailures checks $ lift do
    withKeyWallet bettor do
      let betValue = lovelaceValueOf betCoins
      tx /\ txHash <- runPlaceBet oRef script params guess betValue
        Nothing
        bettorPkh
      pure
        { txHash: txHash
        , txFinalFee: view (_body <<< _fee) tx
        }
  eiResult `shouldSatisfy` isRight
  failures `shouldEqual` []

runPlaceBet
  :: TransactionInput
  -> PlutusScript
  -> BetRefParams
  -> OracleAnswerDatum
  -> Value
  -> Maybe TransactionInput
  -> PaymentPubKeyHash
  -> Contract (Transaction /\ TransactionHash)
runPlaceBet oRef script params guess bet mPrevBet bettorPkh = do
  balancedTx <- placeBet oRef script params guess bet bettorPkh mPrevBet
  balancedSignedTx <- signTransaction balancedTx
  txHash <- submit balancedSignedTx
  awaitTxConfirmed txHash
  pure (balancedSignedTx /\ txHash)

-- -----------------------------------------------------------------------------
-- Take pot tests
-- -----------------------------------------------------------------------------

takeBetsTest :: ContractTest
takeBetsTest = withWallets multipleBetsWallets $
  \(oracle /\ deployer /\ holder /\ bettor1 /\ bettor2 /\ bettor3 /\ bettor4) ->
    mkTakeBetsTest
      120
      20
      10_000_000
      [ (bettor1 /\ mkGuess 1 /\ 10_000_000)
      , (bettor2 /\ mkGuess 2 /\ 20_000_000)
      , (bettor3 /\ mkGuess 3 /\ 30_000_000)
      , (bettor2 /\ mkGuess 4 /\ 50_000_000)
      , (bettor4 /\ mkGuess 5 /\ 65_000_000)
      -- CTL: no support for test tokens out-of-the-box, so... <> valueSingleton testGoldAsset 1_000
      ]
      (oracle /\ deployer /\ holder)
      4
      bettor2

wrongGuesserTakeBetsTest :: ContractTest
wrongGuesserTakeBetsTest = withWallets multipleBetsWallets $
  \(oracle /\ deployer /\ holder /\ bettor1 /\ bettor2 /\ bettor3 /\ bettor4) ->
    do
      ret /\ _ <- collectAssertionFailures mempty $ lift do
        mkTakeBetsTest
          100
          10
          10_000_000
          [ (bettor1 /\ mkGuess 1 /\ 10_000_000)
          , (bettor2 /\ mkGuess 2 /\ 20_000_000)
          , (bettor3 /\ mkGuess 3 /\ 30_000_000)
          , (bettor2 /\ mkGuess 4 /\ 50_000_000)
          , (bettor4 /\ mkGuess 5 /\ 65_000_000)
          -- CTL: no support for test tokens out-of-the-box, so... <> valueSingleton testGoldAsset 1_000
          ]
          (oracle /\ deployer /\ holder)
          5
          bettor2
      ret `shouldSatisfy` isLeft

badUpdatedGuessTakeBetsTest :: ContractTest
badUpdatedGuessTakeBetsTest = withWallets multipleBetsWallets $
  \(oracle /\ deployer /\ holder /\ bettor1 /\ bettor2 /\ bettor3 /\ bettor4) ->
    do
      ret /\ _ <- collectAssertionFailures mempty $ lift do
        mkTakeBetsTest
          100
          10
          10_000_000
          [ (bettor1 /\ mkGuess 1 /\ 10_000_000)
          , (bettor2 /\ mkGuess 2 /\ 20_000_000)
          , (bettor3 /\ mkGuess 3 /\ 30_000_000)
          , (bettor2 /\ mkGuess 4 /\ 50_000_000)
          , (bettor4 /\ mkGuess 5 /\ 65_000_000)
          -- CTL: no support for test tokens out-of-the-box, so... <> valueSingleton testGoldAsset 1_000
          ]
          (oracle /\ deployer /\ holder)
          2
          bettor2
      ret `shouldSatisfy` isLeft

mkTakeBetsTest
  :: Int
  -> Int
  -> Int
  -> Array Bet
  -> (KeyWallet /\ KeyWallet /\ KeyWallet)
  -> Int
  -> KeyWallet
  -> Contract Unit
mkTakeBetsTest
  betUntil
  betReveal
  stepCoins
  bets
  wallets
  answer
  winner = do
  -- Deploy ref script
  (params /\ oRef /\ script) <- runDeployScript
    (BigInt.fromInt betUntil)
    (BigInt.fromInt betReveal)
    (lovelaceValueOf $ BigNum.fromInt stepCoins)
    wallets
  -- Place bets
  runMultipleBets params oRef script bets
  -- Try to take the pot
  _ <- runTakePot params oRef script answer winner
  pure unit

runTakePot
  :: BetRefParams
  -> TransactionInput
  -> PlutusScript
  -> Int
  -> KeyWallet
  -> Contract (Transaction /\ TransactionHash)
runTakePot params oRef script answer winner = do
  withKeyWallet winner do
    -- wait till the reveal slot
    current <- currentSlot
    eraSummaries <- getEraSummaries
    systemStart <- getSystemStart
    revealSlot <- liftEither $ lmap (error <<< show)
      $ posixTimeToSlot eraSummaries systemStart (unwrap params).brpBetReveal
    -- FIXME: This can't seem to be correct though it works
    waitUntil <- liftMaybe (error "canot calculate reveal slot") $
      wrap <$> unwrap current `BigNum.add` unwrap revealSlot
    logInfo' $ "waiting untill slot: " <> show waitUntil
    tip <- waitUntilSlot waitUntil
    logInfo' $ "wait completed, tip is: " <> show tip
    -- betRef
    address <- mkAddress (wrap $ ScriptHashCredential $ hash script) Nothing
    utxoMap <- utxosAt address
    betRef <- liftMaybe (error "cannot find bet utxo")
      $ (head <<< Set.toUnfoldable <<< Map.keys) utxoMap
    -- bettorPkh
    bettorKey <- liftAff $ getPrivatePaymentKey winner
    let bettorPkh = (wrap <<< privateKeyToPkh) bettorKey
    -- publish the answer
    let datum = toData $ OracleAnswerDatum $ BigInt.fromInt answer
    oracleRef <- addRefInput (unwrap params).brpOraclePkh datum
    -- take the pot
    balancedTx <- takePot oRef script params betRef bettorPkh oracleRef
    balancedSignedTx <- signTransaction balancedTx
    txHash <- submit balancedSignedTx
    awaitTxConfirmed txHash
    pure (balancedSignedTx /\ txHash)

addRefInput :: PaymentPubKeyHash -> PlutusData -> Contract TransactionInput
addRefInput pkh datum = do
  let
    constraints :: TxConstraints
    constraints = mconcat
      [ mustPayToPubKeyWithDatum pkh datum DatumInline Value.empty
      ]

  unbalancedTx /\ _utxosMap <- mkUnbalancedTx mempty constraints
  balancedTx <- balanceTx unbalancedTx Map.empty mempty
  balancedSignedTx <- signTransaction balancedTx
  txHash <- submit balancedSignedTx
  awaitTxConfirmed txHash

  address <- mkAddress (wrap $ PubKeyHashCredential $ unwrap pkh) Nothing
  utxoMap <- utxosAt address
  prevUtxoRef <- liftMaybe (error "cannot find the only oracle utxo")
    $ (head <<< Set.toUnfoldable <<< Map.keys) utxoMap
  pure prevUtxoRef

-- -----------------------------------------------------------------------------
-- Auxiliary runners
-- -----------------------------------------------------------------------------

-- | Runner to build and submit a transaction that deploys the reference script.
runDeployScript
  :: BigInt
  -- ^ Bet Until slot
  -> BigInt
  -- ^ Bet Reveal slot
  -> Value
  -- ^ Bet step value
  -> KeyWallet /\ KeyWallet /\ KeyWallet
  -- ^ Wallets to use as an oracle, deployer, and  reference script holder
  -> Contract (BetRefParams /\ TransactionInput /\ PlutusScript)
runDeployScript
  betUntil
  betReveal
  betStep
  (oracleWallet /\ scriptDeployer /\ scriptHolder) = do
  oraclePaymentKey <- liftAff $ getPrivatePaymentKey oracleWallet
  let oraclePkh = (wrap <<< privateKeyToPkh) oraclePaymentKey
  params <- mkParams oraclePkh betUntil betReveal betStep
  logInfo' $ "BetRefParams are: " <> show params
  script <- mkScript params
  withKeyWallet scriptDeployer do
    holderPaymentKey <- liftAff $ getPrivatePaymentKey scriptHolder
    let holderPkh = (wrap <<< privateKeyToPkh) holderPaymentKey
    networkId <- getNetworkId
    let holderAddr = privateKeysToAddress holderPaymentKey Nothing networkId

    let
      lookups :: ScriptLookups
      lookups = mconcat
        [ validator script
        ]

      constraints :: TxConstraints
      constraints = mconcat
        [ mustPayToPubKeyWithScriptRef
            holderPkh
            (PlutusScriptRef script)
            empty
        ]

    unbalancedTx /\ _utxosMap <- mkUnbalancedTx lookups constraints
    balancedTx <- balanceTx unbalancedTx Map.empty mempty
    balancedSignedTx <- signTransaction balancedTx
    txHash <- submit balancedSignedTx
    awaitTxConfirmed txHash

    -- Find script ref utxo
    utxos <- utxosAt holderAddr
    let
      scriptRefUtxos :: Map TransactionInput TransactionOutput
      scriptRefUtxos =
        flip Map.filter utxos \output ->
          let
            scriptRef :: Maybe ScriptHash
            scriptRef = do
              sRef <- output # unwrap # _.scriptRef
              plutusScript <- getPlutusScript sRef
              pure $ hash plutusScript
          in
            scriptRef == Just (hash script)

    (scriptRefInput /\ _scriptRefOutput) <-
      liftMaybe
        (error $ "getValidatorInputs: could not get UTxO with reference script")
        $ head
        $ Map.toUnfoldable scriptRefUtxos

    logInfo' $ "Reference script utxo ref is: " <> show scriptRefInput

    pure (params /\ scriptRefInput /\ script)

-- Utils

mkAddress' :: PaymentPubKeyHash -> Maybe StakePubKeyHash -> Contract Address
mkAddress' receiverPkh receiverSkh =
  mkAddress (wrap $ PubKeyHashCredential $ unwrap receiverPkh)
    (wrap <<< PubKeyHashCredential <<< unwrap <$> receiverSkh)
