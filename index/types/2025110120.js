// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2025110120"] = [{"values":[{"sourceSpan":{"start":[99,1],"name":".spago/web-xhr/v4.1.0/src/Web/XHR/XMLHttpRequest.purs","end":[99,86]},"score":1,"packageInfo":{"values":["web-xhr"],"tag":"Package"},"name":"setRequestHeader","moduleName":"Web.XHR.XMLHttpRequest","info":{"values":[{"type":{"tag":"ForAll","contents":["res",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Web","XHR","XMLHttpRequest"],"XMLHttpRequest"]},{"tag":"TypeVar","contents":"res"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/quickcheck/v7.1.0/src/Test/QuickCheck.purs","end":[165,90]},"score":17,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"quickCheckGenPure","moduleName":"Test.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"prop"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck"],"Result"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A version of `quickCheckPure` with the property specialized to `Gen`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[137,1],"name":".spago/quickcheck/v7.1.0/src/Test/QuickCheck.purs","end":[137,94]},"score":17,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"quickCheckGenWithSeed","moduleName":"Test.QuickCheck","info":{"values":[{"type":{"tag":"ForAll","contents":["prop",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Test","QuickCheck"],"Testable"],"constraintArgs":[{"tag":"TypeVar","contents":"prop"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"prop"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A version of `quickCheckWithSeed` with the property specialized to `Gen`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[236,1],"name":".spago/quickcheck/v7.1.0/src/Test/QuickCheck/Gen.purs","end":[236,53]},"score":17,"packageInfo":{"values":["quickcheck"],"tag":"Package"},"name":"sample","moduleName":"Test.QuickCheck.Gen","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Random","LCG"],"Seed"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Size"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Test","QuickCheck","Gen"],"Gen"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sample a random generator\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[365,1],"name":"src/QueryM.purs","end":[370,11]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"runQueryMInRuntime","moduleName":"QueryM","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM"],"QueryConfig"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["QueryM"],"QueryRuntime"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["QueryM"],"QueryM"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[195,1],"name":".spago/foreign-object/v3.0.0/src/Foreign/Object.purs","end":[195,56]},"score":10,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"insert","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert or replace a key/value pair in a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[307,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence.purs","end":[307,48]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"replace","moduleName":"Data.Sequence","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"O(log(min(i,n-i))). Replace the element at the specified index with\na new element. If the index is out of range, the sequence is returned\nunchanged.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[165,1],"name":".spago/sequences/v3.0.2/src/Data/Sequence/NonEmpty.purs","end":[165,48]},"score":0,"packageInfo":{"values":["sequences"],"tag":"Package"},"name":"replace","moduleName":"Data.Sequence.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence","NonEmpty"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Sequence","NonEmpty"],"Seq"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"O(log(min(i,n-i))). Replace the element at the specified index with\na new element. If the index is out of range, the sequence is returned\nunchanged.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[358,1],"name":".spago/lists/v6.0.1/src/Data/List/Lazy.purs","end":[358,51]},"score":17,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"updateAt","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Update the element at the specified index, returning a new list,\nor return the original list unchanged if the index is out-of-bounds.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[336,1],"name":".spago/lists/v6.0.1/src/Data/List/Lazy.purs","end":[336,51]},"score":17,"packageInfo":{"values":["lists"],"tag":"Package"},"name":"insertAt","moduleName":"Data.List.Lazy","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Lazy","Types"],"List"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert an element into a list at the specified index, or append the element\nto the end of the list if the index is out-of-bounds, returning a new list.\n\nRunning time: `O(n)`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[863,1],"name":".spago/arrays/v6.0.1/src/Data/Array.purs","end":[863,67]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"slice","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Extract a subarray by a start and end index.\n\n```purescript\nletters = [\"a\", \"b\", \"c\"]\nslice 1 3 letters = [\"b\", \"c\"]\nslice 5 7 letters = []\nslice 4 1 letters = []\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[381,1],"name":".spago/arrays/v6.0.1/src/Data/Array/NonEmpty.purs","end":[381,60]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"slice","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[233,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AdjacencyMap.purs","end":[233,79]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"replaceVertex","moduleName":"Data.AdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AdjacencyMap.purs","end":[227,76]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"removeEdge","moduleName":"Data.AdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AdjacencyMap"],"AdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[84,1],"name":".spago/medea/8b215851959aa8bbf33e6708df6bd683c89d1a5a/src/Data/AcyclicAdjacencyMap.purs","end":[84,90]},"score":0,"packageInfo":{"values":["medea"],"tag":"Package"},"name":"removeEdge","moduleName":"Data.AcyclicAdjacencyMap","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AcyclicAdjacencyMap"],"AcyclicAdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","AcyclicAdjacencyMap"],"AcyclicAdjacencyMap"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]