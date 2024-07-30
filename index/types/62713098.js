// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["62713098"] = [{"values":[{"sourceSpan":{"start":[100,1],"name":"src/Internal/Testnet/Contract.purs","end":[106,11]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"withTestnetContractEnv","moduleName":"Ctl.Internal.Testnet.Contract","info":{"values":[{"type":{"tag":"ForAll","contents":["distr",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["wallets",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Ctl","Internal","Test","UtxoDistribution"],"UtxoDistribution"],"constraintArgs":[{"tag":"TypeVar","contents":"distr"},{"tag":"TypeVar","contents":"wallets"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Testnet","Types"],"TestnetConfig"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"distr"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"ContractEnv"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"wallets"}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeVar","contents":"a"}]}]}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Provide a `ContractEnv` connected to cardano-testnet.\nCan be used to run multiple `Contract`s using `runContractInEnv`.\n"}],"tag":"SearchResult"}]