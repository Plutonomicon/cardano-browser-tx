// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1901278953"] = [{"values":[{"sourceSpan":{"start":[125,1],"name":".spago/untagged-union/v1.0.0/src/Untagged/Union.purs","end":[125,66]},"score":0,"packageInfo":{"values":["untagged-union"],"tag":"Package"},"name":"withUor","moduleName":"Untagged.Union","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Untagged","Union"],"UndefinedOr"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Untagged","Union"],"UndefinedOr"]},{"tag":"TypeVar","contents":"b"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[71,3],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder/Internal.purs","end":[71,67]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"modCompleter","moduleName":"Options.Applicative.Builder.Internal","info":{"values":[{"typeClassArguments":[["f",null]],"typeClass":[["Options","Applicative","Builder","Internal"],"HasCompleter"],"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasCompleter"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Completer"]}]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Completer"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[111,1],"name":".spago/ordered-collections/v3.0.0/src/Data/Set.purs","end":[111,55]},"score":6,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"map","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Maps over the values in a set.\n\nThis operation is not structure-preserving for sets, so is not a valid\n`Functor`. An example case: mapping `const x` over a set with `n > 0`\nelements will result in a set with one element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/ordered-collections/v3.0.0/src/Data/Set/NonEmpty.purs","end":[104,71]},"score":6,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"map","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Maps over the values in a set.\n\nThis operation is not structure-preserving for sets, so is not a valid\n`Functor`. An example case: mapping `const x` over a set with `n > 0`\nelements will result in a set with one element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[418,1],"name":".spago/foldable-traversable/v6.0.0/src/Data/Foldable.purs","end":[418,67]},"score":30,"packageInfo":{"values":["foldable-traversable"],"tag":"Package"},"name":"find","moduleName":"Data.Foldable","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Try to find an element in a data structure which satisfies a predicate.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[884,1],"name":".spago/arrays/v7.1.0/src/Data/Array.purs","end":[884,64]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"sortWith","moduleName":"Data.Array","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Sort the elements of an array in increasing order, where elements are\nsorted based on a projection. Sorting is stable: the order of elements is\npreserved if they are equal according to the projection.\n\n```purescript\nsortWith (_.age) [{name: \"Alice\", age: 42}, {name: \"Bob\", age: 21}]\n   = [{name: \"Bob\", age: 21}, {name: \"Alice\", age: 42}]\n```\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[417,1],"name":".spago/arrays/v7.1.0/src/Data/Array/NonEmpty.purs","end":[417,80]},"score":20,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"sortWith","moduleName":"Data.Array.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","NonEmpty","Internal"],"NonEmptyArray"]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[24,3],"name":".spago/gen/v4.0.0/src/Control/Monad/Gen/Class.purs","end":[24,51]},"score":12,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"resize","moduleName":"Control.Monad.Gen.Class","info":{"values":[{"typeClassArguments":[["m",null]],"typeClass":[["Control","Monad","Gen","Class"],"MonadGen"],"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Control","Monad","Gen","Class"],"Size"]}]},{"tag":"TypeConstructor","contents":[["Control","Monad","Gen","Class"],"Size"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":"Modifies the size state for a random generator.\n"}],"tag":"SearchResult"}]