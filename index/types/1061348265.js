// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1061348265"] = [{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/optparse/v4.1.0/src/Text/PrettyPrint/Leijen.purs","end":[104,43]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"punctuate","moduleName":"Text.PrettyPrint.Leijen","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"@(punctuate p xs)@ concatenates all documents in @xs@ with\ndocument @p@ except for the last document.\n\n> someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n> test     = parens (align (cat (punctuate comma someText)))\n\nThis is layed out on a page width of 20 as:\n\n@\n(words,in,a,tuple)\n@\n\nBut when the page width is 15, it is layed out as:\n\n@\n(words,\n in,\n a,\n tuple)\n@\n\n(If you want put the commas in front of their elements instead of\nat the end, you should use 'tupled' or, in general, 'encloseSep'.)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[63,1],"name":"test/Utils.purs","end":[63,71]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"interpretWithConfig","moduleName":"Test.Utils","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Test","Spec","Runner"],"Config"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["TestM"],"TestPlanM"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[12,1],"name":".spago/quickcheck-laws/v6.0.1/src/Test/QuickCheck/Laws.purs","end":[12,47]},"score":4,"packageInfo":{"values":["quickcheck-laws"],"tag":"Package"},"name":"checkLaws","moduleName":"Test.QuickCheck.Laws","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[72,1],"name":"test/Parser.purs","end":[72,64]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"validateJsonArray","moduleName":"Test.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Medea","Schema"],"Schema"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["TestM"],"ValidationM"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/node-process/v8.2.0/src/Node/Process.purs","end":[83,49]},"score":2,"packageInfo":{"values":["node-process"],"tag":"Package"},"name":"onSignal","moduleName":"Node.Process","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Posix","Signal"],"Signal"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Install a handler for a particular signal.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[338,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[338,50]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onTimeout","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'timeout'` event.\n\n`'timeout'` is emitted if the `Socket` times out from inactivity.\nThe `Socket` is still open and should be manually closed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[331,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[331,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onReady","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'ready'` event.\n\n`'ready'` is emitted when the `Socket` is ready to be used.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[303,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[303,46]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onEnd","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'end'` event.\n\n`'end'` is emitted when the other end of the `Socket` sends a `FIN` packet.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[297,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[297,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onDrain","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'drain'` event.\n\n`'drain'` is emitted when the write buffer is empty.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[277,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[277,50]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onConnect","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'connect'` event.\n\n`'connect'` is emitted when a new connection is successfully establed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[215,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"destroy","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Ensure no more I/O activity happens on the socket.\n\nIf an `Error` is provided, an `'error'` event is emitted.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[196,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Socket.purs","end":[196,62]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"createConnectionICP","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates an ICP `Socket`, initiates a connection,\nreturns the `Socket`, adds the callback as a one-time listener for the\n`'connect'` event, and emits the `'connect'` event.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Server.purs","end":[234,52]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onListening","moduleName":"Node.Net.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Server"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'listening'` event.\n\n`'listening'` is emitted when the `Server` has been bound.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[210,1],"name":".spago/node-net/v2.0.1/src/Node/Net/Server.purs","end":[210,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onClose","moduleName":"Node.Net.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Server"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'close'` event.\n\n`'close'` is emitted when a close occurs.\nWill not be emitted until all connections have ended.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[60,1],"name":".spago/node-http/v6.0.0/src/Node/HTTP.purs","end":[60,46]},"score":1,"packageInfo":{"values":["node-http"],"tag":"Package"},"name":"close","moduleName":"Node.HTTP","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","HTTP"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Close a listening HTTP server. The specified callback will be run the server closing is complete.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[356,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[358,23]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"fdClose","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"FileDescriptor"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Close a file asynchronously. See the [Node Documentation](https://nodejs.org/api/fs.html#fs_fs_close_fd_callback)\nfor details.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[242,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[244,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"readFile","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Buffer"],"Buffer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reads the entire contents of a file returning the result as a raw buffer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[201,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[203,21]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"mkdir","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Makes a new directory.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[193,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[195,21]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"rmdir","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deletes a directory.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[185,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[187,22]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"unlink","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deletes a file.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[167,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[169,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"realpath","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the canonicalized absolute location for a path.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[159,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[161,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"readlink","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reads the value of a symlink.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[132,1],"name":".spago/node-fs/v6.1.0/src/Node/FS/Async.purs","end":[134,20]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"stat","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","FS","Stats"],"Stats"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets file statistics.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[457,1],"name":".spago/node-child-process/v7.1.0/src/Node/ChildProcess.purs","end":[460,25]},"score":0,"packageInfo":{"values":["node-child-process"],"tag":"Package"},"name":"fork","moduleName":"Node.ChildProcess","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Node","ChildProcess"],"ChildProcess"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A special case of `spawn` for creating Node.js child processes. The first\nargument is the module to be run, and the second is the argv (command line\narguments).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[219,1],"name":".spago/node-child-process/v7.1.0/src/Node/ChildProcess.purs","end":[222,17]},"score":0,"packageInfo":{"values":["node-child-process"],"tag":"Package"},"name":"onDisconnect","moduleName":"Node.ChildProcess","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","ChildProcess"],"ChildProcess"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Handle the `\"disconnect\"` signal.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":"src/JsWebSocket.purs","end":[36,49]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_onWsConnect","moduleName":"JsWebSocket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["JsWebSocket"],"JsWebSocket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":".spago/js-timers/v5.0.1/src/Effect/Timer.purs","end":[43,70]},"score":1,"packageInfo":{"values":["js-timers"],"tag":"Package"},"name":"setInterval","moduleName":"Effect.Timer","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Effect","Timer"],"IntervalId"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs an effectful function after on a set interval with the specified delay\nin milliseconds between iterations. The returned `IntervalId` can be used\nto cancel the timer and prevent the interval from running any further.\n\nThe interval delay value is capped at 4ms by the JS API, any value less\nthan this will be clamped.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[25,1],"name":".spago/js-timers/v5.0.1/src/Effect/Timer.purs","end":[25,68]},"score":1,"packageInfo":{"values":["js-timers"],"tag":"Package"},"name":"setTimeout","moduleName":"Effect.Timer","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Effect","Timer"],"TimeoutId"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Runs an effectful function after the specified delay in milliseconds. The\nreturned `TimeoutId` can be used to cancel the timer before it completes.\n\nThe timeout delay value is capped at 4ms by the JS API, any value less than\nthis will be clamped.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":"src/Contract/Wallet/KeyFile.purs","end":[30,53]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkKeyWalletFromFiles","moduleName":"Contract.Wallet.KeyFile","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Wallet"],"Wallet"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Load `PrivateKey`s from `skey` files (the files should be in JSON format as\naccepted by cardano-cli).\nThe keys should have `PaymentSigningKeyShelley_ed25519` and\n`StakeSigningKeyShelley_ed25519` types, respectively.\nThe stake key is optional.\n\n**NodeJS only**\n"}],"tag":"SearchResult"}]