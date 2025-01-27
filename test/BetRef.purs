module Test.Ctl.BetRef
  ( main
  ) where

import Prelude

import Contract.Test.Testnet
  ( defaultClusterConfig
  , defaultTestnetConfig
  , testTestnetContracts
  )
import Contract.Test.Utils (exitCode, interruptOnSignal)
import Data.Maybe (Maybe(Just))
import Data.Posix.Signal (Signal(SIGINT))
import Data.Time.Duration (Seconds(Seconds))
import Effect (Effect)
import Effect.Aff
  ( Milliseconds(Milliseconds)
  , cancelWith
  , effectCanceler
  , launchAff
  )
import Mote (group)
import Mote.TestPlanM as Utils
import Test.Ctl.BetRef.Test as BetRef
import Test.Spec.Runner (defaultConfig)

-- Run with `npm run testnet-test`
main :: Effect Unit
main = interruptOnSignal SIGINT =<< launchAff do
  let
    config = defaultTestnetConfig
      { suppressLogs = false
      , clusterConfig = defaultClusterConfig { slotLength = Seconds 0.5 }
      }
  flip cancelWith (effectCanceler (exitCode 1)) do
    Utils.interpretWithConfig
      defaultConfig { timeout = Just $ Milliseconds 600_000.0, exit = true }
      $ group "bet-ref example" do
          testTestnetContracts config BetRef.placeBetSuite
          testTestnetContracts config BetRef.takePotSuite
