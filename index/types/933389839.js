// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["933389839"] = [{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/record/v4.0.0/src/Record.purs","end":[42,7]},"score":6,"packageInfo":{"values":["record"],"tag":"Package"},"name":"get","moduleName":"Record","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["r'",{"tag":"ForAll","contents":["l",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"l"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"l"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r'"},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Type","Proxy"],"Proxy"]},{"tag":"TypeVar","contents":"l"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Get a property for a label which is specified using a value-level proxy for\na type-level string.\n\nFor example:\n\n```purescript\nget (Proxy :: Proxy \"x\") :: forall r a. { x :: a | r } -> a\n```\n"}],"tag":"SearchResult"}]