// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["821488886"] = [{"values":[{"sourceSpan":{"start":[135,1],"name":".spago/prelude/v6.0.1/src/Control/Bind.purs","end":[135,88]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"composeKleisliFlipped","moduleName":"Control.Bind","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Bind"],"Bind"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"c"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"c"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Backwards Kleisli composition.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[129,1],"name":".spago/prelude/v6.0.1/src/Control/Bind.purs","end":[129,81]},"score":93,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"composeKleisli","moduleName":"Control.Bind","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["m",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Bind"],"Bind"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"b"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"c"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"c"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Forwards Kleisli composition.\n\nFor example:\n\n```purescript\nimport Data.Array (head, tail)\n\nthird = tail >=> tail >=> head\n```\n"}],"tag":"SearchResult"}]