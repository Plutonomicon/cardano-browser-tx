{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "cardano-transaction-lib"
, dependencies =
  [ "aeson"
  , "aeson-helpers"
  , "aff"
  , "aff-promise"
  , "aff-retry"
  , "affjax"
  , "arraybuffer-types"
  , "arrays"
  , "avar"
  , "bifunctors"
  , "bigints"
  , "checked-exceptions"
  , "console"
  , "const"
  , "contravariant"
  , "control"
  , "datetime"
  , "debug"
  , "effect"
  , "either"
  , "encoding"
  , "enums"
  , "exceptions"
  , "foldable-traversable"
  , "foreign"
  , "foreign-object"
  , "heterogeneous"
  , "http-methods"
  , "identity"
  , "integers"
  , "js-date"
  , "lattice"
  , "lists"
  , "math"
  , "maybe"
  , "medea"
  , "media-types"
  , "monad-logger"
  , "mote"
  , "newtype"
  , "node-buffer"
  , "node-child-process"
  , "node-fs"
  , "node-fs-aff"
  , "node-path"
  , "node-process"
  , "node-readline"
  , "nonempty"
  , "now"
  , "numbers"
  , "optparse"
  , "ordered-collections"
  , "orders"
  , "parallel"
  , "partial"
  , "posix-types"
  , "prelude"
  , "profunctor"
  , "profunctor-lenses"
  , "purescript-toppokki"
  , "quickcheck"
  , "quickcheck-combinators"
  , "quickcheck-laws"
  , "rationals"
  , "record"
  , "refs"
  , "safe-coerce"
  , "spec"
  , "spec-quickcheck"
  , "strings"
  , "stringutils"
  , "tailrec"
  , "text-encoding"
  , "these"
  , "transformers"
  , "tuples"
  , "typelevel"
  , "typelevel-prelude"
  , "uint"
  , "undefined"
  , "unfoldable"
  , "untagged-union"
  , "variant"
  ]
, packages = ./packages.dhall
, sources =
  [ "src/**/*.purs"
  , "test/**/*.purs"
  , "examples/**/*.purs"
  , "templates/ctl-scaffold/src/**/*.purs"
  , "templates/ctl-scaffold/test/**/*.purs"
  , "templates/ctl-scaffold/exe/**/*.purs"
  ]
}
