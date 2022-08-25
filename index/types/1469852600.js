// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1469852600"] = [{"values":[{"sourceSpan":{"start":[288,1],"name":"src/QueryM.purs","end":[292,11]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"withQueryRuntime","moduleName":"QueryM","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM"],"QueryConfig"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM"],"QueryRuntime"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Constructs and finalizes a contract environment that is usable inside a\nbracket callback.\nMake sure that `Aff` action does not end before all contracts that use the\nruntime terminate. Otherwise `WebSocket`s will be closed too early.\n"}],"tag":"SearchResult"}]