// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["350967018"] = [{"values":[{"sourceSpan":{"start":[37,3],"name":".spago/transformers/v5.2.0/src/Control/Monad/Writer/Class.purs","end":[37,43]},"score":21,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"listen","moduleName":"Control.Monad.Writer.Class","info":{"values":[{"typeClassArguments":[["w",null],["m",null]],"typeClass":[["Control","Monad","Writer","Class"],"MonadWriter"],"type":{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Writer","Class"],"MonadWriter"],"constraintArgs":[{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"w"}]}}]}]}]},null]},null]},null]}}],"tag":"TypeClassMemberResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/gen/v3.0.0/src/Control/Monad/Gen/Common.purs","end":[66,22]},"score":10,"packageInfo":{"values":["gen"],"tag":"Package"},"name":"genNonEmpty","moduleName":"Control.Monad.Gen.Common","info":{"values":[{"type":{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Rec","Class"],"MonadRec"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Gen","Class"],"MonadGen"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Unfoldable"],"Unfoldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a generator that outputs `NonEmpty` values, choosing values from a\ngenerator for each of the items.\n\nThe size of the value will be determined by the current size state\nfor the generator. To generate a value of a particular size, use the\n`resize` function from the `MonadGen` class first.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[62,1],"name":".spago/transformers/v5.2.0/src/Control/Monad/Error/Class.purs","end":[66,20]},"score":21,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"try","moduleName":"Control.Monad.Error.Class","info":{"values":[{"type":{"tag":"ForAll","contents":["e",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad","Error","Class"],"MonadError"],"constraintArgs":[{"tag":"TypeVar","contents":"e"},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"m"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"e"}]},{"tag":"TypeVar","contents":"a"}]}}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Return `Right` if the given action succeeds, `Left` if it throws.\n"}],"tag":"SearchResult"}]