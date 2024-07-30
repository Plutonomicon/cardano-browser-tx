// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1878678269"] = [{"values":[{"sourceSpan":{"start":[26,3],"name":".spago/untagged-union/v1.0.0/src/Untagged/TypeCheck.purs","end":[26,50]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"hasRuntimeType","moduleName":"Untagged.TypeCheck","info":{"values":[{"typeClassArguments":[["a",null]],"typeClass":[["Untagged","TypeCheck"],"HasRuntimeType"],"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Untagged","TypeCheck"],"HasRuntimeType"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Foreign"],"Foreign"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/quickcheck/v8.0.1/src/Test/QuickCheck/Gen.purs","end":[234,44]},"score":14,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"evalGen","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"GenState"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a random generator, keeping only the randomly-generated result\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/foreign-object/v4.1.0/src/Foreign/Object/Unsafe.purs","end":[10,64]},"score":11,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Foreign.Object.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Unsafely get the value for a key in a object.\n\nThis function does not check whether the key exists in the object.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[1323,1],"name":".spago/arrays/v7.1.0/src/Data/Array.purs","end":[1323,56]},"score":21,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the element of an array at the specified index.\n\n```purescript\nunsafePartial $ unsafeIndex [\"a\", \"b\", \"c\"] 1 = \"b\"\n```\n\nUsing `unsafeIndex` with an out-of-range index will not immediately raise a runtime error.\nInstead, the result will be undefined. Most attempts to subsequently use the result will\ncause a runtime error, of course, but this is not guaranteed, and is dependent on the backend;\nsome programs will continue to run as if nothing is wrong. For example, in the JavaScript backend,\nthe expression `unsafePartial (unsafeIndex [true] 1)` has type `Boolean`;\nsince this expression evaluates to `undefined`, attempting to use it in an `if` statement will cause\nthe else branch to be taken.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[593,1],"name":".spago/arrays/v7.1.0/src/Data/Array/NonEmpty.purs","end":[593,64]},"score":21,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unsafeIndex","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[346,1],"name":"src/Internal/Helpers.purs","end":[346,58]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"fromMaybeFlipped","moduleName":"Ctl.Internal.Helpers","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[94,1],"name":"src/Internal/Contract/QueryHandle.purs","end":[95,69]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"queryHandleForBlockfrostBackend","moduleName":"Ctl.Internal.Contract.QueryHandle","info":{"values":[{"type":{"tag":"ForAll","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","LogParams"],"LogParams"]},{"tag":"TypeVar","contents":"rest"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryBackend"],"BlockfrostBackend"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"QueryHandle"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[206,1],"name":"src/Internal/Contract/Monad.purs","end":[207,78]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkQueryHandle","moduleName":"Ctl.Internal.Contract.Monad","info":{"values":[{"type":{"tag":"ForAll","contents":["rest",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","LogParams"],"LogParams"]},{"tag":"TypeVar","contents":"rest"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryBackend"],"QueryBackend"]}]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","QueryHandle","Type"],"QueryHandle"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[331,1],"name":".spago/aeson/v2.0.1/src/Aeson.purs","end":[335,7]},"score":0,"packageInfo":{"values":["aeson"],"tag":"Package"},"name":"caseAeson","moduleName":"Aeson","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Aeson"],"AesonCases"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]