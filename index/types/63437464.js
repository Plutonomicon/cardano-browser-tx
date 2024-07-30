// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["63437464"] = [{"values":[{"sourceSpan":{"start":[181,1],"name":".spago/pipes/v8.0.0/src/Pipes/Internal.purs","end":[181,27]},"score":1,"packageInfo":{"values":["pipes"],"tag":"Package"},"name":"closed","moduleName":"Pipes.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Pipes","Internal"],"X"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/partial/v4.0.0/src/Partial.purs","end":[12,46]},"score":21,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"crashWith","moduleName":"Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A partial function which crashes on any input with the specified message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,1],"name":".spago/partial/v4.0.0/src/Partial/Unsafe.purs","end":[23,41]},"score":21,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafeCrashWith","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A function which crashes with the specified error message.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[19,1],"name":".spago/partial/v4.0.0/src/Partial/Unsafe.purs","end":[19,47]},"score":21,"packageInfo":{"values":["partial"],"tag":"Package"},"name":"unsafePartial","moduleName":"Partial.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Discharge a partiality constraint, unsafely.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[110,1],"name":".spago/foreign/v7.0.0/src/Foreign.purs","end":[110,44]},"score":11,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeFromForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely coerce a `Foreign` value.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":".spago/foreign/v7.0.0/src/Foreign.purs","end":[106,42]},"score":11,"packageInfo":{"values":["foreign"],"tag":"Package"},"name":"unsafeToForeign","moduleName":"Foreign","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Coerce any value to the a `Foreign` value.\n\nThis is considered unsafe as it's only intended to be used on primitive\nJavaScript types, rather than PureScript types. Exporting PureScript values\nvia the FFI can be dangerous as they can be mutated by code outside the\nPureScript program, resulting in difficult to diagnose problems elsewhere.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[13,1],"name":".spago/exceptions/v6.0.0/src/Effect/Exception/Unsafe.purs","end":[13,37]},"score":15,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrow","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Defined as `unsafeThrowException <<< error`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[9,1],"name":".spago/exceptions/v6.0.0/src/Effect/Exception/Unsafe.purs","end":[9,45]},"score":15,"packageInfo":{"values":["exceptions"],"tag":"Package"},"name":"unsafeThrowException","moduleName":"Effect.Exception.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Throw an exception in pure code. This function should be used very\nsparingly, as it can cause unexpected crashes at runtime.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[156,1],"name":".spago/aff-retry/v2.0.0/src/Effect/Aff/Retry.purs","end":[156,57]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"fibonacciBackoff","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicy"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[152,1],"name":".spago/aff-retry/v2.0.0/src/Effect/Aff/Retry.purs","end":[152,59]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"exponentialBackoff","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicy"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Grow delay exponentially each iteration.\nEach delay will increase by a factor of two.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/aff-retry/v2.0.0/src/Effect/Aff/Retry.purs","end":[136,54]},"score":0,"packageInfo":{"values":["aff-retry"],"tag":"Package"},"name":"constantDelay","moduleName":"Effect.Aff.Retry","info":{"values":[{"type":{"tag":"ForAll","contents":["d",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"d"}]},{"tag":"TypeConstructor","contents":[["Effect","Aff","Retry"],"RetryPolicy"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Cconstant delay with unlimited retries\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/prelude/v6.0.1/src/Data/Void.purs","end":[31,30]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"absurd","moduleName":"Data.Void","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Void"],"Void"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Eliminator for the `Void` type.\nUseful for stating that some code branch is impossible because you've\n\"acquired\" a value of type `Void` (which you can't).\n\n```purescript\nrightOnly :: forall t . Either Void t -> t\nrightOnly (Left v) = absurd v\nrightOnly (Right t) = t\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[339,1],"name":".spago/variant/v8.0.0/src/Data/Variant/Internal.purs","end":[339,29]},"score":2,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"impossible","moduleName":"Data.Variant.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,3],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Num/Sets.purs","end":[10,20]},"score":1,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"toInt","moduleName":"Data.Typelevel.Num.Sets","info":{"values":[{"typeClassArguments":[["n",null]],"typeClass":[["Data","Typelevel","Num","Sets"],"Nat"],"type":{"tag":"ForAll","contents":["n",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Num","Sets"],"Nat"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,3],"name":".spago/typelevel/v6.0.0/src/Data/Typelevel/Bool.purs","end":[46,25]},"score":1,"packageInfo":{"values":["typelevel"],"tag":"Package"},"name":"toBool","moduleName":"Data.Typelevel.Bool","info":{"values":[{"typeClassArguments":[["b",null]],"typeClass":[["Data","Typelevel","Bool"],"BoolI"],"type":{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Typelevel","Bool"],"BoolI"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[98,1],"name":".spago/datetime/v6.1.0/src/Data/Time/Duration.purs","end":[98,49]},"score":11,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"negateDuration","moduleName":"Data.Time.Duration","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Negates a duration, turning a positive duration negative or a negative\nduration positive.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[90,3],"name":".spago/datetime/v6.1.0/src/Data/Time/Duration.purs","end":[90,34]},"score":11,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"toDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[89,3],"name":".spago/datetime/v6.1.0/src/Data/Time/Duration.purs","end":[89,36]},"score":11,"packageInfo":{"values":["datetime"],"tag":"Package"},"name":"fromDuration","moduleName":"Data.Time.Duration","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Time","Duration"],"Duration"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Time","Duration"],"Duration"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Time","Duration"],"Milliseconds"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,3],"name":".spago/prelude/v6.0.1/src/Data/Show.purs","end":[24,22]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"show","moduleName":"Data.Show","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Show"],"Show"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show"],"Show"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,3],"name":".spago/prelude/v6.0.1/src/Data/Show/Generic.purs","end":[15,30]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericShow'","moduleName":"Data.Show.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Show","Generic"],"GenericShow"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Show","Generic"],"GenericShow"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":".spago/prelude/v6.0.1/src/Data/Ring.purs","end":[51,37]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"negate","moduleName":"Data.Ring","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"`negate x` can be used as a shorthand for `zero - x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[224,1],"name":".spago/prelude/v6.0.1/src/Data/Ord.purs","end":[224,46]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"signum","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The sign function; returns `one` if the argument is positive,\n`negate one` if the argument is negative, or `zero` if the argument is `zero`.\nFor floating point numbers with signed zeroes, when called with a zero,\nthis function returns the argument in order to preserve the sign.\nFor any `x`, we should have `signum x * abs x == x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[216,1],"name":".spago/prelude/v6.0.1/src/Data/Ord.purs","end":[216,43]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"abs","moduleName":"Data.Ord","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ring"],"Ring"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The absolute value function. `abs x` is defined as `if x >= zero then x\nelse negate x`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[58,3],"name":".spago/prelude/v6.0.1/src/Data/HeytingAlgebra.purs","end":[58,16]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"not","moduleName":"Data.HeytingAlgebra","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra"],"HeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[14,3],"name":".spago/prelude/v6.0.1/src/Data/HeytingAlgebra/Generic.purs","end":[14,24]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"genericNot'","moduleName":"Data.HeytingAlgebra.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","HeytingAlgebra","Generic"],"GenericHeytingAlgebra"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","HeytingAlgebra","Generic"],"GenericHeytingAlgebra"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[68,3],"name":".spago/prelude/v6.0.1/src/Data/EuclideanRing.purs","end":[68,21]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"degree","moduleName":"Data.EuclideanRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","EuclideanRing"],"EuclideanRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","EuclideanRing"],"EuclideanRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[306,1],"name":".spago/enums/v6.0.1/src/Data/Enum.purs","end":[306,48]},"score":11,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"defaultFromEnum","moduleName":"Data.Enum","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"Enum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provides a default implementation for `fromEnum`.\n\n- Assumes `toEnum 0 = Just bottom`.\n- Cannot be used in conjuction with `defaultPred`.\n\nRuns in `O(n)` where `n` is `fromEnum a`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[116,3],"name":".spago/enums/v6.0.1/src/Data/Enum.purs","end":[116,23]},"score":11,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"fromEnum","moduleName":"Data.Enum","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Enum"],"BoundedEnum"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum"],"BoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[59,3],"name":".spago/enums/v6.0.1/src/Data/Enum/Generic.purs","end":[59,31]},"score":11,"packageInfo":{"values":["enums"],"tag":"Package"},"name":"genericFromEnum'","moduleName":"Data.Enum.Generic","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Enum","Generic"],"GenericBoundedEnum"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,3],"name":".spago/prelude/v6.0.1/src/Data/DivisionRing.purs","end":[30,18]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"recip","moduleName":"Data.DivisionRing","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","DivisionRing"],"DivisionRing"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","DivisionRing"],"DivisionRing"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":".spago/bignumber/760d11b41ece31b8cdd3c53349c5c2fd48d3ff89/src/Data/BigNumber.purs","end":[34,53]},"score":0,"packageInfo":{"values":["bignumber"],"tag":"Package"},"name":"isBigNumber","moduleName":"Data.BigNumber","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[14,1],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode.purs","end":[14,54]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"toJsonString","moduleName":"Data.Argonaut.Encode","info":{"values":[{"type":{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Encode and stringify a type in one step.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,3],"name":".spago/argonaut-codecs/v9.1.0/src/Data/Argonaut/Encode/Class.purs","end":[27,26]},"score":2,"packageInfo":{"values":["argonaut-codecs"],"tag":"Package"},"name":"encodeJson","moduleName":"Data.Argonaut.Encode.Class","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Argonaut","Encode","Class"],"EncodeJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[128,1],"name":"src/Internal/Types/ScriptLookups.purs","end":[128,63]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"validator","moduleName":"Ctl.Internal.Types.ScriptLookups","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","PlutusScript"],"PlutusScript"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"ScriptLookups"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A script lookups value with a validator script.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":"src/Internal/Metadata/MetadataType.purs","end":[30,75]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"toGeneralTxMetadata","moduleName":"Ctl.Internal.Metadata.MetadataType","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Metadata","MetadataType"],"MetadataType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","GeneralTransactionMetadata"],"GeneralTransactionMetadata"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[137,1],"name":".spago/cardano-types/56877b43ea392ef6486e37d52e1c37d8c2b8c42d/src/Cardano/Types/Internal/Helpers.purs","end":[137,37]},"score":0,"packageInfo":{"values":["cardano-types"],"tag":"Package"},"name":"clone","moduleName":"Cardano.Types.Internal.Helpers","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsCsl"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[23,3],"name":".spago/cardano-types/56877b43ea392ef6486e37d52e1c37d8c2b8c42d/src/Cardano/ToMetadata.purs","end":[23,42]},"score":0,"packageInfo":{"values":["cardano-types"],"tag":"Package"},"name":"toMetadata","moduleName":"Cardano.ToMetadata","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Cardano","ToMetadata"],"ToMetadata"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","ToMetadata"],"ToMetadata"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionMetadatum"],"TransactionMetadatum"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[55,3],"name":".spago/cardano-types/56877b43ea392ef6486e37d52e1c37d8c2b8c42d/src/Cardano/ToData.purs","end":[55,28]},"score":0,"packageInfo":{"values":["cardano-types"],"tag":"Package"},"name":"toData","moduleName":"Cardano.ToData","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Cardano","ToData"],"ToData"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","ToData"],"ToData"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","PlutusData"],"PlutusData"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[263,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[263,49]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"_cslToJson","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","Argonaut","Core"],"Json"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[243,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[247,12]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"showViaJson","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[236,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[240,12]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"showViaBytes","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsBytes"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[218,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[222,11]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"cslToAesonViaBytes","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsBytes"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[211,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[215,11]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"cslToAeson","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsJson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[37,52]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"_toBytes","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","ByteArray"],"ByteArray"]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[31,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib/Internal.purs","end":[31,60]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"toBytes","moduleName":"Cardano.Serialization.Lib.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsCsl"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsBytes"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Data","ByteArray"],"ByteArray"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[17,3],"name":".spago/cardano-types/56877b43ea392ef6486e37d52e1c37d8c2b8c42d/src/Cardano/AsCbor.purs","end":[17,31]},"score":0,"packageInfo":{"values":["cardano-types"],"tag":"Package"},"name":"encodeCbor","moduleName":"Cardano.AsCbor","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Cardano","AsCbor"],"AsCbor"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","AsCbor"],"AsCbor"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Cardano","Types","CborBytes"],"CborBytes"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[690,3],"name":".spago/aeson/v2.0.1/src/Aeson.purs","end":[690,28]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"encodeAeson","moduleName":"Aeson","info":{"values":[{"typeClassArguments":[["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]],"typeClass":[["Aeson"],"EncodeAeson"],"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Aeson"],"EncodeAeson"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]