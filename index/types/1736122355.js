// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1736122355"] = [{"values":[{"sourceSpan":{"start":[42,1],"name":".spago/node-readline/v7.0.0/src/Node/ReadLine.purs","end":[42,57]},"score":0,"packageInfo":{"values":["node-readline"],"tag":"Package"},"name":"output","moduleName":"Node.ReadLine","info":{"values":[{"type":{"tag":"ForAll","contents":["w",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Options"],"Option"]},{"tag":"TypeConstructor","contents":[["Node","ReadLine"],"InterfaceOptions"]}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","Stream"],"Writable"]},{"tag":"TypeVar","contents":"w"}]}}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/functors/v5.0.0/src/Data/Functor/Product/Nested.purs","end":[54,38]},"score":6,"packageInfo":{"values":["functors"],"tag":"Package"},"name":"product1","moduleName":"Data.Functor.Product.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Functor","Product","Nested"],"Product1"]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[163,1],"name":".spago/free/v7.0.0/src/Data/Coyoneda.purs","end":[163,42]},"score":3,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftCoyoneda","moduleName":"Data.Coyoneda","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Coyoneda"],"Coyoneda"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift a value described by the type constructor `f` to `Coyoneda f`.\n\nNote that for any functor `f` `liftCoyoneda` has a right inverse\n`lowerCoyoneda`:\n```purescript\nliftCoyoneda <<< lowerCoyoneda $ (Coyoneda e)\n= liftCoyoneda <<< unCoyoneda map $ (Coyoneda e)\n= liftCoyonead (runExists (\\(CoyonedaF k fi) -> map k fi) e)\n= liftCoyonead (Coyoneda e)\n= coyoneda identity (Coyoneda e)\n= Coyoneda e\n```\nMoreover if `f` is a `Functor` then `liftCoyoneda` is an isomorphism of\nfunctors with inverse `lowerCoyoneda`:  we already showed that\n`lowerCoyoneda <<< hoistCoyoneda identity = lowerCoyoneda` is its left inverse\nwhenever `f` is a functor.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[123,1],"name":".spago/free/v7.0.0/src/Control/Monad/Free.purs","end":[123,31]},"score":3,"packageInfo":{"values":["free"],"tag":"Package"},"name":"liftF","moduleName":"Control.Monad.Free","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","NaturalTransformation"],"~>"]},{"tag":"TypeVar","contents":"f"},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Free"],"Free"]},{"tag":"TypeVar","contents":"f"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lift an impure value described by the generating type constructor `f` into\nthe free monad.\n"}],"tag":"SearchResult"}]