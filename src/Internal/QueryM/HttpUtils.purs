-- | This module defines utilities for working with HTTP requests
module Ctl.Internal.QueryM.HttpUtils
  ( handleAffjaxResponseGeneric
  ) where

import Prelude

import Aeson (JsonDecodeError)
import Affjax (Error, Response) as Affjax
import Affjax.StatusCode as Affjax.StatusCode
import Data.Bifunctor (lmap)
import Data.Either (Either(Left, Right))

--------------------------------------------------------------------------------
-- Affjax
--------------------------------------------------------------------------------

-- Checks response status code and returns `ClientError` in case of failure,
-- otherwise attempts to decode the result.
--
-- This function solves the problem described there:
-- https://github.com/eviefp/purescript-affjax-errors

handleAffjaxResponseGeneric
  :: forall err intermediate result
   . (Affjax.Error -> err)
  -- ^ Convert an Affjax error into custom error
  -> (Int -> String -> err)
  -- ^ Convert a non-2xx status code into custom error
  -> (String -> JsonDecodeError -> err)
  -- ^ Wrap aeson-parse/decode errors
  -> (String -> Either JsonDecodeError intermediate)
  -- ^ Parse the response body
  -> (intermediate -> Either err result)
  -- ^ Function from `intermediate` to `result`
  -> Either Affjax.Error (Affjax.Response String)
  -- ^ Argument
  -> Either err result
handleAffjaxResponseGeneric
  mkHttpError
  mkHttpResponseError
  mkDecodeError
  decodeAeson
  mkResult =
  case _ of
    Left affjaxError ->
      Left (mkHttpError affjaxError)
    Right { status: Affjax.StatusCode.StatusCode statusCode, body }
      | statusCode < 200 || statusCode > 299 ->
          Left (mkHttpResponseError statusCode body)
      | otherwise -> do
          intermediate <- lmap (mkDecodeError body) do
            decodeAeson body
          mkResult intermediate
