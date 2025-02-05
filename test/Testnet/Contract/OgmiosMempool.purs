module Test.Ctl.Testnet.Contract.OgmiosMempool
  ( suite
  ) where

import Prelude

import Cardano.Types.BigNum as BigNum
import Cardano.Types.PlutusScript (hash) as PlutusScript
import Contract.Backend.Ogmios.Mempool
  ( acquireMempoolSnapshot
  , fetchMempoolTxs
  , mempoolSnapshotHasTx
  , mempoolSnapshotSizeAndCapacity
  , withMempoolSnapshot
  )
import Contract.Test (ContractTest, InitialUTxOs, withKeyWallet, withWallets)
import Contract.Test.Mote (TestPlanM)
import Contract.Transaction (awaitTxConfirmed)
import Ctl.Examples.PlutusV2.InlineDatum as InlineDatum
import Ctl.Internal.QueryM.Ogmios.Types
  ( MempoolSizeAndCapacity(MempoolSizeAndCapacity)
  )
import Data.Array (length)
import Mote (group, skip, test)
import Test.Spec.Assertions (shouldEqual)

suite :: TestPlanM ContractTest Unit
suite = group "Ogmios mempool test" do
  test "acquireMempoolSnapshot" do
    let
      distribution :: InitialUTxOs
      distribution =
        [ BigNum.fromInt 1000_000_000
        , BigNum.fromInt 2000_000_000
        ]
    withWallets distribution \alice -> do
      withKeyWallet alice do
        void acquireMempoolSnapshot
  test "fetchMempoolTXs" do
    let
      distribution :: InitialUTxOs
      distribution =
        [ BigNum.fromInt 1000_000_000
        , BigNum.fromInt 2000_000_000
        ]
    withWallets distribution \alice -> do
      withKeyWallet alice do
        validator <- InlineDatum.checkDatumIsInlineScript
        let vhash = PlutusScript.hash validator
        txId <- InlineDatum.payToCheckDatumIsInline vhash
        mpTxs <- fetchMempoolTxs =<< acquireMempoolSnapshot
        length mpTxs `shouldEqual` 1
        awaitTxConfirmed txId
        mpTxs' <- fetchMempoolTxs =<< acquireMempoolSnapshot
        length mpTxs' `shouldEqual` 0
  skip $ test
    "mempoolSnapshotHasTx - skipped because HasTx always returns false for some reason"
    do
      let
        distribution :: InitialUTxOs
        distribution =
          [ BigNum.fromInt 1000_000_000
          , BigNum.fromInt 2000_000_000
          ]
      withWallets distribution \alice -> do
        withKeyWallet alice do
          validator <- InlineDatum.checkDatumIsInlineScript
          let vhash = PlutusScript.hash validator
          txId <- InlineDatum.payToCheckDatumIsInline vhash
          withMempoolSnapshot (flip mempoolSnapshotHasTx txId) >>= shouldEqual
            true
          snapshot <- acquireMempoolSnapshot
          _mpTxs' <- fetchMempoolTxs snapshot
          -- for_ mpTxs' \tx -> do
          --   liftEffect <<< Console.log <<< show =<< liftEffect
          --     (transactionHash tx)
          awaitTxConfirmed txId
          mempoolSnapshotHasTx snapshot txId >>= shouldEqual false
  test "mempoolSnapshotSizeAndCapacity" do
    let
      distribution :: InitialUTxOs
      distribution =
        [ BigNum.fromInt 1000_000_000
        , BigNum.fromInt 2000_000_000
        ]
    withWallets distribution \alice -> do
      withKeyWallet alice do
        validator <- InlineDatum.checkDatumIsInlineScript
        let vhash = PlutusScript.hash validator
        void $ InlineDatum.payToCheckDatumIsInline vhash
        MempoolSizeAndCapacity { numberOfTxs } <-
          withMempoolSnapshot (mempoolSnapshotSizeAndCapacity)
        numberOfTxs `shouldEqual` 1
