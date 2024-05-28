// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1501612007"] = [{"values":[{"sourceSpan":{"start":[168,1],"name":".spago/parsing/v10.2.0/src/Parsing.purs","end":[168,64]},"score":1,"packageInfo":{"values":["parsing"],"tag":"Package"},"name":"runParser","moduleName":"Parsing","info":{"values":[{"type":{"tag":"ForAll","contents":["s",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Parsing"],"Parser"]},{"tag":"TypeVar","contents":"s"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Parsing"],"ParseError"]}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Run a parser on an input stream `s` and produce either an error or the\nresult `a` of the parser.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[193,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Internal.purs","end":[193,66]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"takeListT","moduleName":"Options.Applicative.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Internal"],"ListT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Internal"],"ListT"]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[33,1],"name":".spago/mote/v1.1.0/src/Mote/Description.purs","end":[37,21]},"score":0,"packageInfo":{"values":["mote"],"tag":"Package"},"name":"setRunMode","moduleName":"Mote.Description","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["t",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Mote","Description"],"RunMode"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Description"],"Description"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Mote","Description"],"Description"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"t"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sets the `RunMode` of a `Description`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[513,1],"name":".spago/ordered-collections/v3.0.0/src/Data/Map/Internal.purs","end":[513,55]},"score":6,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"delete","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Delete a key and its corresponding value from a map.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[178,1],"name":".spago/arrays/v7.1.0/src/Data/Array/ST.purs","end":[178,52]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"unshift","moduleName":"Data.Array.ST","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Append an element to the front of a mutable array. Returns the new length of\nthe array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/arrays/v7.1.0/src/Data/Array/ST.purs","end":[165,49]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"push","moduleName":"Data.Array.ST","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Append an element to the end of a mutable array. Returns the new length of\nthe array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[15,1],"name":".spago/arrays/v7.1.0/src/Data/Array/ST/Partial.purs","end":[20,12]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"peek","moduleName":"Data.Array.ST.Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Read the value at the specified index in a mutable array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[136,1],"name":".spago/st/v6.2.0/src/Control/Monad/ST/Internal.purs","end":[136,61]},"score":6,"packageInfo":{"values":["st"],"tag":"Package"},"name":"write","moduleName":"Control.Monad.ST.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"STRef"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Set the value of a mutable reference.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[143,1],"name":".spago/transformers/v6.0.0/src/Control/Monad/List/Trans.purs","end":[143,67]},"score":23,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"take","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Take a number of elements from the front of a list.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[95,1],"name":".spago/transformers/v6.0.0/src/Control/Monad/List/Trans.purs","end":[95,68]},"score":23,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"prepend","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Prepend an element to a list.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[158,1],"name":".spago/transformers/v6.0.0/src/Control/Monad/List/Trans.purs","end":[158,67]},"score":23,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"drop","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Drop a number of elements from the front of a list.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[158,1],"name":".spago/plutus-types/v1.0.1/src/Cardano/Plutus/Types/Map.purs","end":[158,74]},"score":0,"packageInfo":{"values":["plutus-types"],"tag":"Package"},"name":"delete","moduleName":"Cardano.Plutus.Types.Map","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Cardano","Plutus","Types","Map"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Cardano","Plutus","Types","Map"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Delete a key in a `Map`\n"}],"tag":"SearchResult"}]