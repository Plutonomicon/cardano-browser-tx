// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["948406407"] = [{"values":[{"sourceSpan":{"start":[212,1],"name":".spago/foldable-traversable/v6.0.0/src/Data/FoldableWithIndex.purs","end":[219,9]},"score":30,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"foldWithIndexM","moduleName":"Data.FoldableWithIndex","info":{"values":[{"type":{"tag":"ForAll","contents":["i",{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","FoldableWithIndex"],"FoldableWithIndex"],"constraintArgs":[{"tag":"TypeVar","contents":"i"},{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Similar to 'foldlWithIndex', but the result is encapsulated in a monad.\n\nNote: this function is not generally stack-safe, e.g., for monads which\nbuild up thunks a la `Eff`.\n"}],"tag":"SearchResult"}]