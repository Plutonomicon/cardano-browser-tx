module Test.Testnet.BetRef.Types where

import Contract.Prelude
import Prelude

import Cardano.Plutus.DataSchema
  ( class HasPlutusSchema
  , class UniqueIndices
  , type (:+)
  , type (:=)
  , type (@@)
  , ConsI
  , I
  , NilI
  , PNil
  , S
  , Z
  )
import Cardano.Plutus.Types.Value as Plutus
import Cardano.Types (PaymentPubKeyHash)
import Contract.Numeric.BigNum as BigNum
import Contract.PlutusData
  ( class FromData
  , class ToData
  , PlutusData(Constr, Integer)
  , genericFromData
  , genericToData
  )
import Ctl.Internal.Types.Interval (POSIXTime)
-- import Contract.Value (Value)
-- import Contract.PlutusData (PlutusData(Integer))
import Data.List (List)
import JS.BigInt (BigInt)
import JS.BigInt as BigInt

-- | Goals made my the concerned team.
type TeamGoals = BigInt

-- | Match result given by the oracle.
-- In fact the name is misleading, since the very same type is
-- used in the datum BetRefDatum that represents a bet itself.
newtype OracleAnswerDatum = OracleAnswerDatum TeamGoals

derive instance Eq OracleAnswerDatum
derive instance Generic OracleAnswerDatum _
derive instance Newtype OracleAnswerDatum _

instance Show OracleAnswerDatum where
  show = genericShow

instance ToData OracleAnswerDatum where
  toData (OracleAnswerDatum teamGoals) =
    Constr (BigNum.fromInt 0) [ Integer teamGoals ]

instance FromData OracleAnswerDatum where
  fromData (Constr _ [ Integer teamGoals ]) = Just $ OracleAnswerDatum teamGoals
  fromData _ = Nothing

newtype BetRefParams = BetRefParams
  { brpOraclePkh :: PaymentPubKeyHash
  -- ^ Oracle's payment public key hash. This is needed to assert that UTxO being looked at indeed belongs to the Oracle.
  , brpBetUntil :: POSIXTime
  -- ^ Time until which bets can be placed.
  , brpBetReveal :: POSIXTime
  -- ^ Time at which Oracle will reveal the correct match result.
  , brpBetStep :: Plutus.Value
  -- ^ Each newly placed bet must be more than previous bet by `brpBetStep` amount.
  }

derive instance Newtype BetRefParams _
derive instance Generic BetRefParams _

instance
  HasPlutusSchema BetRefParams
    ( "BetRefParams"
        :=
          ( "brpOraclePkh" := I PaymentPubKeyHash
              :+ "brpBetUntil"
              := I POSIXTime
              :+ "brpBetReveal"
              := I POSIXTime
              :+ "brpBetStep"
              := I Plutus.Value

              :+ PNil
          )
        @@ Z
        :+ PNil
    )

instance ToData BetRefParams where
  toData = genericToData

instance Show BetRefParams where
  show = genericShow

-- | List of guesses by users along with the maximum bet placed yet. A new guess gets /prepended/ to this list. Note that since we are always meant to increment previously placed bet with `brpBetStep`, the newly placed bet would necessarily be maximum (it would be foolish to initialize `brpBetStep` with some negative amounts).
newtype BetRefDatum = BetRefDatum
  { brdBets :: List (PaymentPubKeyHash /\ OracleAnswerDatum)
  , brdPreviousBet :: Plutus.Value
  }

derive instance Newtype BetRefDatum _
derive instance Generic BetRefDatum _

instance
  HasPlutusSchema BetRefDatum
    ( "BetRefDatum"
        :=
          ( "brdBets" := I (List (PaymentPubKeyHash /\ OracleAnswerDatum))
              :+ "brdPreviousBet"
              := I Plutus.Value
              :+ PNil
          )
        @@ Z
        :+ PNil
    )

instance ToData BetRefDatum where
  toData = genericToData

instance FromData BetRefDatum where
  fromData = genericFromData

-- | Redeemer representing choices available to the user.
data BetRefAction
  = -- | User makes a guess.
    Bet { guess :: OracleAnswerDatum }
  | -- | User takes the pot.
    Take

derive instance Generic BetRefAction _

instance
  HasPlutusSchema BetRefAction
    ( "Bet"
        :=
          ( "guess" := I OracleAnswerDatum
              :+ PNil
          )
        @@ (S Z)

        :+ "Take"
        := PNil

        @@ Z
        :+ PNil
    )

instance ToData BetRefAction where
  toData = genericToData
