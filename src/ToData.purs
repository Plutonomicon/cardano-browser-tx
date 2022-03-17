module ToData
  ( class ToData
  , toData
  ) where

import Prelude

import Data.Array as Array
import Data.BigInt (BigInt)
import Data.BigInt as BigInt
import Data.Either (Either(Left, Right))
import Data.Foldable (class Foldable)
import Data.List (List)
import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(Just, Nothing))
import Data.Profunctor.Strong ((***))
import Data.Ratio (Ratio, denominator, numerator)
import Data.Tuple.Nested (type (/\), (/\))
import Data.UInt (UInt)
import Helpers (uIntToBigInt)
import Prim.TypeError (class Fail, Text)
import Types.ByteArray (ByteArray, hexToByteArrayUnsafe)
import Types.PlutusData (PlutusData(Integer, Constr, List, Map, Bytes))

class ToData (a :: Type) where
  toData :: a -> PlutusData

instance ToData Void where
  toData = absurd

instance ToData Unit where
  toData _ = List []

instance ToData Boolean where
  toData false = Constr zero []
  toData true = Constr one []

instance ToData a => ToData (Maybe a) where
  toData (Just x) = Constr zero [ toData x ] -- Just is one-indexed by Plutus
  toData Nothing = Constr one []

instance (ToData a, ToData b) => ToData (Either a b) where
  toData (Left e) = Constr zero [ toData e ]
  toData (Right x) = Constr one [ toData x ]

instance Fail (Text "Int is not supported, use BigInt instead") => ToData Int where
  toData = toData <<< BigInt.fromInt

instance ToData BigInt where
  toData = Integer

instance ToData UInt where
  toData = toData <<< uIntToBigInt

instance ToData a => ToData (Array a) where
  toData = List <<< map toData

instance ToData a => ToData (List a) where
  toData = foldableToPlutusData

instance (ToData a, ToData b) => ToData (a /\ b) where
  toData (a /\ b) = List [ toData a, toData b ]

instance (ToData k, ToData v) => ToData (Map k v) where
  toData mp = Map $ entries # map (toData *** toData) # Map.fromFoldable
    where
    entries = Map.toUnfoldable mp :: Array (k /\ v)

instance ToData a => ToData (Ratio a) where
  toData ratio = List [ toData (numerator ratio), toData (denominator ratio) ]

instance ToData ByteArray where
  toData = Bytes

instance ToData PlutusData where
  toData = identity

-- | This covers `Bech32` which is just a type alias for `String`
instance ToData String where
  toData = Bytes <<< hexToByteArrayUnsafe -- unsafe, maybe there's a better way.

foldableToPlutusData :: forall (a :: Type) (t :: Type -> Type). Foldable t => ToData a => t a -> PlutusData
foldableToPlutusData = Array.fromFoldable >>> map toData >>> List
