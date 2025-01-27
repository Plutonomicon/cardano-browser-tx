module Test.Ctl.BetRef.BetRefValidator
  ( mkScript
  ) where

import Contract.Prelude hiding (apply)

import Cardano.Plutus.ApplyArgs (applyArgs)
import Cardano.Types.PlutusScript (PlutusScript)
import Contract.Monad
  ( Contract
  , liftContractE
  )
import Contract.PlutusData (PlutusData, toData)
import Control.Monad.Error.Class (liftMaybe)
import Ctl.Internal.Cardano.TextEnvelope
  ( decodeTextEnvelope
  , plutusScriptFromEnvelope
  )
import Data.Array (singleton) as Array
import Effect.Exception (error)
import Test.Ctl.BetRef.Types (BetRefParams)

foreign import betRefValidator :: String

mkScript :: BetRefParams -> Contract PlutusScript
mkScript ps = do
  rawScript <- liftMaybe (error "error decoding validator's cbor") do
    envelope <- decodeTextEnvelope betRefValidator
    plutusScriptFromEnvelope envelope
  liftContractE $ apply rawScript ps

apply
  :: PlutusScript
  -> BetRefParams
  -> Either String PlutusScript
apply rawScript ps =
  let
    scriptArgs :: Array PlutusData
    scriptArgs = Array.singleton (toData ps)
  in
    applyArgs rawScript scriptArgs
