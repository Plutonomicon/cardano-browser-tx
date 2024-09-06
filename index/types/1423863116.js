// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1423863116"] = [{"values":[{"sourceSpan":{"start":[28,1],"name":".spago/mote/v1.1.0/src/Mote/Entry.purs","end":[28,57]},"score":0,"packageInfo":{"values":["mote"],"tag":"Package"},"name":"bracket","moduleName":"Mote.Entry","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeVar","contents":"r"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"b"},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Entry"],"Bracket"]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a bracket value for the `Entry` record. The first argument runs\nbefore the group/item, possibly generating some kind of resource r. The\nsecond argument runs on test completion, accepting the `r` generated in\nallocation to allow it to de-allocate/clean up.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[132,1],"name":"src/Internal/Testnet/Utils.purs","end":[132,64]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"waitFor","moduleName":"Ctl.Internal.Testnet.Utils","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["e",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Testnet","Utils"],"EventSource"]},{"tag":"TypeVar","contents":"e"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[127,1],"name":".spago/cardano-types/v3.0.0/src/Cardano/Types/Internal/Helpers.purs","end":[133,17]},"score":0,"packageInfo":{"values":["cardano-types"],"tag":"Package"},"name":"withNonEmptyArray","moduleName":"Cardano.Types.Internal.Helpers","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["c",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsCsl"],"constraintArgs":[{"tag":"TypeVar","contents":"c"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Cardano","Serialization","Lib","Internal"],"IsListContainer"],"constraintArgs":[{"tag":"TypeVar","contents":"c"},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"e"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"c"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]