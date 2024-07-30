// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["112577196"] = [{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/freet/v7.0.0/src/Control/Monad/Free/Trans.purs","end":[128,109]},"score":1,"packageInfo":{"values":["freet"],"tag":"Package"},"name":"bimapFreeT","moduleName":"Control.Monad.Free.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["m",{"tag":"ForAll","contents":["n",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"m"},{"tag":"TypeVar","contents":"n"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free","Trans"],"FreeT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free","Trans"],"FreeT"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeVar","contents":"n"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Change the base functor `f` and the underlying `Monad` for a `FreeT` action.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[143,1],"name":".spago/freet/v7.0.0/src/Control/Comonad/Cofree/Trans.purs","end":[143,115]},"score":1,"packageInfo":{"values":["freet"],"tag":"Package"},"name":"bimapCofreeT","moduleName":"Control.Comonad.Cofree.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["g",{"tag":"ForAll","contents":["w",{"tag":"ForAll","contents":["u",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"u"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Functor"],"Functor"],"constraintArgs":[{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"g"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"w"},{"tag":"TypeVar","contents":"u"}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree","Trans"],"CofreeT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"w"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Comonad","Cofree","Trans"],"CofreeT"]},{"tag":"TypeVar","contents":"g"}]},{"tag":"TypeVar","contents":"u"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Both 'interpret' and 'hoist' the inner functor as well as the effect using natural transforms.\n"}],"tag":"SearchResult"}]