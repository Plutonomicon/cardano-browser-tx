// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1542331042"] = [{"values":[{"sourceSpan":{"start":[898,1],"name":"src/Internal/ProcessConstraints.purs","end":[901,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkUnbalancedTxImpl","moduleName":"Ctl.Internal.ProcessConstraints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"ScriptLookups"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TxConstraints"],"TxConstraints"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ProcessConstraints","Error"],"MkUnbalancedTxError"]}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","UtxoMap"],"UtxoMap"]}]}}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[30,1],"name":"src/Contract/UnbalancedTx.purs","end":[33,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkUnbalancedTxE","moduleName":"Contract.UnbalancedTx","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ScriptLookups"],"ScriptLookups"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TxConstraints"],"TxConstraints"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","ProcessConstraints","Error"],"MkUnbalancedTxError"]}]},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","UtxoMap"],"UtxoMap"]}]}}]}}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Create an `UnbalancedTx` given `ScriptLookups` and\n`TxConstraints`. This should be called in conjuction with\n`balanceTx` and  `signTransaction`.\n\nThis is a 'non-throwing' variant; if you need the 'throwing' variant, use\n`mkUnbalancedTx` instead.\n"}],"tag":"SearchResult"}]