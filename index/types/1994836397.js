// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1994836397"] = [{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/web-html/v4.1.0/src/Web/HTML/Window.purs","end":[83,70]},"score":1,"packageInfo":{"values":["web-html"],"tag":"Package"},"name":"open","moduleName":"Web.HTML.Window","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Web","HTML","Window"],"Window"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Web","HTML","Window"],"Window"]}]}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2825,1],"name":".spago/cardano-serialization-lib/v1.0.0/src/Cardano/Serialization/Lib.purs","end":[2825,116]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"multiAsset_setAsset","moduleName":"Cardano.Serialization.Lib","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"MultiAsset"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"ScriptHash"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"AssetName"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"BigNum"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"BigNum"]}]}}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[107,1],"name":".spago/cardano-collateral-select/v1.0.0/src/Cardano/Collateral/Select.purs","end":[112,43]},"score":0,"packageInfo":{"values":["cardano-collateral-select"],"tag":"Package"},"name":"selectCollateral","moduleName":"Cardano.Collateral.Select","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Coin"],"Coin"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Coin"],"Coin"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","UtxoMap"],"UtxoMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionUnspentOutput"],"TransactionUnspentOutput"]}]}}]}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Selects an utxo combination to use as collateral by generating all possible\nutxo combinations and then applying the following constraints:\n\n  1. `maxCollateralInputs` protocol parameter limits the maximum\n  cardinality of a single utxo combination.\n\n  2. Collateral inputs must have a total value of at least `minRequiredCollateral`\n  Ada\n\n  3. We prefer utxo combinations that require the lowest utxo min ada\n  value for the corresponding collateral output, thus maintaining a\n  sufficient `totalCollateral`.\n\n  4. If two utxo combinations correspond to return outputs with the same\n  utxo min ada value, we prefer the one with fewer inputs.\n\n"}],"tag":"SearchResult"}]