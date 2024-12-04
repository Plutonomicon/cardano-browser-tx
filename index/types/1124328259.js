// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1124328259"] = [{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/web-html/v4.1.0/src/Web/HTML/Window.purs","end":[104,69]},"score":1,"packageInfo":{"values":["web-html"],"tag":"Package"},"name":"promptDefault","moduleName":"Web.HTML.Window","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Web","HTML","Window"],"Window"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[396,1],"name":"src/Internal/QueryM.purs","end":[400,43]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mempoolSnapshotNextTxAff","moduleName":"Ctl.Internal.QueryM","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"OgmiosWebSocket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Logging"],"Logger"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"MempoolSnapshotAcquired"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"MempoolTransaction"]}]}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[112,1],"name":"src/Internal/BalanceTx/Collateral/Select.purs","end":[116,43]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"selectCollateral","moduleName":"Ctl.Internal.BalanceTx.Collateral.Select","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Coin"],"Coin"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","UtxoMap"],"UtxoMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","List","Types"],"List"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionUnspentOutput"],"TransactionUnspentOutput"]}]}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Selects an utxo combination to use as collateral by generating all possible\nutxo combinations and then applying the following constraints:\n\n  1. `maxCollateralInputs` protocol parameter limits the maximum\n  cardinality of a single utxo combination.\n\n  2. Collateral inputs must have a total value of at least 5 Ada\n  (`minRequiredCollateral`).\n\n  3. We prefer utxo combinations that require the lowest utxo min ada\n  value for the corresponding collateral output, thus maintaining a\n  sufficient `totalCollateral`.\n\n  4. If two utxo combinations correspond to return outputs with the same\n  utxo min ada value, we prefer the one with fewer inputs.\n\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[5164,1],"name":".spago/cardano-serialization-lib/v3.0.0/src/Cardano/Serialization/Lib.purs","end":[5164,126]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"votingProcedures_get","moduleName":"Cardano.Serialization.Lib","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"VotingProcedures"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"Voter"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"GovernanceActionId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"VotingProcedure"]}]}}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2793,1],"name":".spago/cardano-serialization-lib/v3.0.0/src/Cardano/Serialization/Lib.purs","end":[2793,130]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"metadataMap_insertI32","moduleName":"Cardano.Serialization.Lib","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"MetadataMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Number"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"TransactionMetadatum"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"TransactionMetadatum"]}]}}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[2792,1],"name":".spago/cardano-serialization-lib/v3.0.0/src/Cardano/Serialization/Lib.purs","end":[2792,130]},"score":0,"packageInfo":{"values":["cardano-serialization-lib"],"tag":"Package"},"name":"metadataMap_insertStr","moduleName":"Cardano.Serialization.Lib","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"MetadataMap"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"TransactionMetadatum"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"ParensInType","contents":{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Nullable"],"Nullable"]},{"tag":"TypeConstructor","contents":[["Cardano","Serialization","Lib"],"TransactionMetadatum"]}]}}}]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]