// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["2140778275"] = [{"values":[{"sourceSpan":{"start":[53,1],"name":"src/Internal/Wallet/Cip30.purs","end":[82,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"Cip30Wallet","moduleName":"Ctl.Internal.Wallet.Cip30","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["connection",{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Cip30"],"Api"]},{"tag":"RCons","contents":["getNetworkId",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"RCons","contents":["getUtxos",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionUnspentOutput"],"TransactionUnspentOutput"]}]}}]}}]},{"tag":"RCons","contents":["getCollateral",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionUnspentOutput"],"TransactionUnspentOutput"]}]}}]}}]},{"tag":"RCons","contents":["getBalance",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Value"],"Value"]}]},{"tag":"RCons","contents":["getUsedAddresses",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]}}]},{"tag":"RCons","contents":["getUnusedAddresses",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]}}]},{"tag":"RCons","contents":["getChangeAddress",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]},{"tag":"RCons","contents":["getRewardAddresses",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]}}]},{"tag":"RCons","contents":["signTx",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Transaction"],"Transaction"]}]}]},{"tag":"RCons","contents":["signData",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","RawBytes"],"RawBytes"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Cip30"],"DataSignature"]}]}]}]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"A simplified internal view of CIP-30 API that wraps `Api` from\n`purescript-cip30`.\n\n- We hardcode the collateral amount to 5 ADA\n- We always request all UTxOs in `getUtxos`\n- We don't support querying of supported CIP-30 extensions\n- We don't support getting wallet icon, name and apiVersion\n- We don't support `isEnabled` call\n\nUse `purescript-cip30` for these: `connection` field contains the API handle.\n"}],"tag":"SearchResult"}]