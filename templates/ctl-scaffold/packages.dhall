let upstream =
    -- https://github.com/mlabs-haskell/purescript-cardano-package-set
      https://raw.githubusercontent.com/mlabs-haskell/purescript-cardano-package-set/e90c63f2ce2ba25c214984e164b47fd3351d0d36/packages.dhall
        sha256:68f5f97917ba156be2060e7ae1bab6b12fab4d755b6eb6aa997b9c5069bb7065

let additions = 
      { cardano-transaction-lib =
        { dependencies =
          [ "aeson"
          , "aff"
          , "aff-promise"
          , "aff-retry"
          , "affjax"
          , "ansi"
          , "argonaut"
          , "argonaut-codecs"
          , "arrays"
          , "avar"
          , "bifunctors"
          , "bignumber"
          , "bytearrays"
          , "cardano-hd-wallet"
          , "cardano-key-wallet"
          , "cardano-message-signing"
          , "cardano-plutus-data-schema"
          , "cardano-serialization-lib"
          , "cardano-transaction-builder"
          , "cardano-types"
          , "cardano-provider"
          , "checked-exceptions"
          , "cip30"
          , "cip30-mock"
          , "cip30-typesafe"
          , "cip95"
          , "cip95-typesafe"
          , "console"
          , "control"
          , "crypto"
          , "datetime"
          , "debug"
          , "effect"
          , "either"
          , "enums"
          , "exceptions"
          , "foldable-traversable"
          , "foreign"
          , "foreign-object"
          , "formatters"
          , "functions"
          , "heterogeneous"
          , "http-methods"
          , "identity"
          , "integers"
          , "js-bigints"
          , "js-date"
          , "lattice"
          , "lists"
          , "literals"
          , "maybe"
          , "media-types"
          , "monad-logger"
          , "mote"
          , "mote-testplan"
          , "newtype"
          , "noble-secp256k1"
          , "node-buffer"
          , "node-child-process"
          , "node-fs"
          , "node-fs-aff"
          , "node-path"
          , "node-process"
          , "node-readline"
          , "node-streams"
          , "node-streams-aff"
          , "nonempty"
          , "now"
          , "nullable"
          , "numbers"
          , "optparse"
          , "ordered-collections"
          , "orders"
          , "parallel"
          , "parsing"
          , "partial"
          , "plutus-types"
          , "posix-types"
          , "prelude"
          , "profunctor"
          , "profunctor-lenses"
          , "quickcheck"
          , "quickcheck-combinators"
          , "random"
          , "rationals"
          , "record"
          , "refs"
          , "safe-coerce"
          , "safely"
          , "spec"
          , "spec-quickcheck"
          , "strings"
          , "stringutils"
          , "tailrec"
          , "these"
          , "toppokki"
          , "transformers"
          , "tuples"
          , "typelevel-prelude"
          , "uint"
          , "unfoldable"
          , "unsafe-coerce"
          , "untagged-union"
          , "uplc-apply-args"
          , "variant"
          , "web-html"
          , "web-storage"
          ]
        , repo = "https://github.com/Plutonomicon/cardano-transaction-lib.git"
        , version = "6b44f6d9c74fef3c0611b7780a6eb0a16e7a9df9"
        }
      }

in upstream // additions
