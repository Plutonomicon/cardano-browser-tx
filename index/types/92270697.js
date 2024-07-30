// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["92270697"] = [{"values":[{"sourceSpan":{"start":[264,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[264,64]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"completer","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasCompleter"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Completer"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add a completer to an argument.\n\nA completer is a function `String -> Effect String` which, given a partial\nargument, returns all possible completions for that argument.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[257,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[257,58]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"action","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasCompleter"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Add a bash completion action. Common actions include `file` and\n`directory`. See\n<http://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html#Programmable-Completion-Builtins>\nfor a complete list.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[202,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[202,57]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"metavar","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasMetavar"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify a metavariable for the argument.\n\nMetavariables have no effect on the actual parser, and only serve to specify\nthe symbolic name for an argument to be displayed in the help text.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[174,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[174,48]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"value","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasValue"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify a default value for an option.\n\n**Note**: Because this modifier means the parser will never fail,\ndo not use it with combinators such as 'some' or 'many', as\nthese combinators continue until a failure occurs.\nCareless use will thus result in a hang.\n\nTo display the default value, combine with `showDefault` or\n`showDefaultWith`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[186,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[186,38]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"help","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify the help text for an option.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[162,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[162,51]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"long","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasName"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify a long name for an option.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[158,1],"name":".spago/optparse/v5.0.0/src/Options/Applicative/Builder.purs","end":[158,50]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"short","moduleName":"Options.Applicative.Builder","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Options","Applicative","Builder","Internal"],"HasName"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Options","Applicative","Builder","Internal"],"Mod"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Specify a short name for an option.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[156,1],"name":".spago/options/v7.0.0/src/Data/Options.purs","end":[156,52]},"score":3,"packageInfo":{"values":["options"],"tag":"Package"},"name":"opt","moduleName":"Data.Options","info":{"values":[{"type":{"tag":"ForAll","contents":["opt",{"tag":"ForAll","contents":["value",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Options"],"Option"]},{"tag":"TypeVar","contents":"opt"}]},{"tag":"TypeVar","contents":"value"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The default way of creating `Option` values. Constructs an `Option` with\nthe given key, which passes the given value through unchanged.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[67,1],"name":".spago/nonempty/v7.0.0/src/Data/NonEmpty.purs","end":[67,53]},"score":9,"packageInfo":{"values":["nonempty"],"tag":"Package"},"name":"singleton","moduleName":"Data.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Plus"],"Plus"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","NonEmpty"],"NonEmpty"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a non-empty structure with a single value.\n\n```purescript\nimport Prelude\n\nsingleton 1 == 1 :| []\nsingleton 1 == 1 :| Nil\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/either/v6.1.0/src/Data/Either/Nested.purs","end":[60,31]},"score":41,"packageInfo":{"values":["either"],"tag":"Package"},"name":"in1","moduleName":"Data.Either.Nested","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["z",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"z"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[77,1],"name":"src/Internal/Testnet/DistributeFundsV2.purs","end":[77,60]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"emptyTx","moduleName":"Ctl.Internal.Testnet.DistributeFundsV2","info":{"values":[{"type":{"tag":"ForAll","contents":["wallet",{"tag":"ForAll","contents":["amount",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"wallet"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Testnet","DistributeFundsV2"],"Tx"]},{"tag":"TypeVar","contents":"wallet"}]},{"tag":"TypeVar","contents":"amount"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[110,1],"name":".spago/transformers/v6.0.0/src/Control/Monad/List/Trans.purs","end":[110,57]},"score":24,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"singleton","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Applicative"],"Applicative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create a list with one element.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[139,1],"name":".spago/transformers/v6.0.0/src/Control/Monad/List/Trans.purs","end":[139,48]},"score":24,"packageInfo":{"values":["transformers"],"tag":"Package"},"name":"repeat","moduleName":"Control.Monad.List.Trans","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","List","Trans"],"ListT"]},{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Generate an infinite list by repeating a value.\n"}],"tag":"SearchResult"}]