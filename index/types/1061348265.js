// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1061348265"] = [{"values":[{"sourceSpan":{"start":[104,1],"name":".spago/optparse/v5.0.0/src/Text/PrettyPrint/Leijen.purs","end":[104,43]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"punctuate","moduleName":"Text.PrettyPrint.Leijen","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Text","PrettyPrint","Leijen"],"Doc"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"@(punctuate p xs)@ concatenates all documents in @xs@ with\ndocument @p@ except for the last document.\n\n> someText = map text [\"words\",\"in\",\"a\",\"tuple\"]\n> test     = parens (align (cat (punctuate comma someText)))\n\nThis is layed out on a page width of 20 as:\n\n@\n(words,in,a,tuple)\n@\n\nBut when the page width is 15, it is layed out as:\n\n@\n(words,\n in,\n a,\n tuple)\n@\n\n(If you want put the commas in front of their elements instead of\nat the end, you should use 'tupled' or, in general, 'encloseSep'.)\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[11,1],"name":".spago/quickcheck-laws/v7.0.0/src/Test/QuickCheck/Laws.purs","end":[11,47]},"score":3,"packageInfo":{"values":["quickcheck-laws"],"tag":"Package"},"name":"checkLaws","moduleName":"Test.QuickCheck.Laws","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/node-process/v10.0.0/src/Node/Process.purs","end":[83,49]},"score":4,"packageInfo":{"values":["node-process"],"tag":"Package"},"name":"onSignal","moduleName":"Node.Process","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Posix","Signal"],"Signal"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Install a handler for a particular signal.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[338,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[338,50]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onTimeout","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'timeout'` event.\n\n`'timeout'` is emitted if the `Socket` times out from inactivity.\nThe `Socket` is still open and should be manually closed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[331,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[331,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onReady","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'ready'` event.\n\n`'ready'` is emitted when the `Socket` is ready to be used.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[303,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[303,46]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onEnd","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'end'` event.\n\n`'end'` is emitted when the other end of the `Socket` sends a `FIN` packet.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[297,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[297,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onDrain","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'drain'` event.\n\n`'drain'` is emitted when the write buffer is empty.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[277,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[277,50]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onConnect","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'connect'` event.\n\n`'connect'` is emitted when a new connection is successfully establed.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[215,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"destroy","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Effect","Exception"],"Error"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Ensure no more I/O activity happens on the socket.\n\nIf an `Error` is provided, an `'error'` event is emitted.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[196,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Socket.purs","end":[196,62]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"createConnectionICP","moduleName":"Node.Net.Socket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Node","Net","Socket"],"Socket"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates an ICP `Socket`, initiates a connection,\nreturns the `Socket`, adds the callback as a one-time listener for the\n`'connect'` event, and emits the `'connect'` event.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[234,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Server.purs","end":[234,52]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onListening","moduleName":"Node.Net.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Server"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'listening'` event.\n\n`'listening'` is emitted when the `Server` has been bound.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[210,1],"name":".spago/node-net/v4.0.0/src/Node/Net/Server.purs","end":[210,48]},"score":1,"packageInfo":{"values":["node-net"],"tag":"Package"},"name":"onClose","moduleName":"Node.Net.Server","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Net","Server"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attaches the callback as a listener to the `'close'` event.\n\n`'close'` is emitted when a close occurs.\nWill not be emitted until all connections have ended.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/node-http/v8.0.0/src/Node/HTTP.purs","end":[61,46]},"score":1,"packageInfo":{"values":["node-http"],"tag":"Package"},"name":"close","moduleName":"Node.HTTP","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","HTTP"],"Server"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Close a listening HTTP server. The specified callback will be run the server closing is complete.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[375,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[377,23]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"fdClose","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","FS"],"FileDescriptor"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Close a file asynchronously. See the [Node Documentation](https://nodejs.org/api/fs.html#fs_fs_close_fd_callback)\nfor details.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[267,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[269,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"readFile","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Buffer"],"Buffer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reads the entire contents of a file returning the result as a raw buffer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[227,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[229,21]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"mkdir","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Makes a new directory.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[212,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[214,21]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"rm","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deletes a file or directory.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[198,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[200,21]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"rmdir","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deletes a directory.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[190,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[192,22]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"unlink","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Deletes a file.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[172,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[174,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"realpath","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Find the canonicalized absolute location for a path.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[164,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[166,24]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"readlink","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Reads the value of a symlink.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[128,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[130,20]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"stat","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","FS","Stats"],"Stats"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets file statistics.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[138,1],"name":".spago/node-fs/v8.1.1/src/Node/FS/Async.purs","end":[140,20]},"score":3,"packageInfo":{"values":["node-fs"],"tag":"Package"},"name":"lstat","moduleName":"Node.FS.Async","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Node","FS","Async"],"Callback"]},{"tag":"TypeConstructor","contents":[["Node","FS","Stats"],"Stats"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Gets file or symlink statistics. `lstat` is identical to `stat`, except\nthat if the `FilePath` is a symbolic link, then the link itself is stat-ed,\nnot the file that it refers to.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[457,1],"name":".spago/node-child-process/v9.0.0/src/Node/ChildProcess.purs","end":[460,25]},"score":0,"packageInfo":{"values":["node-child-process"],"tag":"Package"},"name":"fork","moduleName":"Node.ChildProcess","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Node","ChildProcess"],"ChildProcess"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A special case of `spawn` for creating Node.js child processes. The first\nargument is the module to be run, and the second is the argv (command line\narguments).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[219,1],"name":".spago/node-child-process/v9.0.0/src/Node/ChildProcess.purs","end":[222,17]},"score":0,"packageInfo":{"values":["node-child-process"],"tag":"Package"},"name":"onDisconnect","moduleName":"Node.ChildProcess","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","ChildProcess"],"ChildProcess"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Handle the `\"disconnect\"` signal.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[196,1],"name":"src/Internal/Test/UtxoDistribution.purs","end":[199,19]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"transferFundsFromEnterpriseToBase","moduleName":"Ctl.Internal.Test.UtxoDistribution","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Key"],"PrivatePaymentKey"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Key"],"KeyWallet"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"For each wallet which includes a stake key, transfer the value of\nthe utxos at its enterprise address to its base address. Note\nthat this function clears the `usedTxOuts` cache, so it should\nnot be used if there could be items in the cache that shouldn't\nbe cleared (this function is intended to be used only on `ContractTest`\nstartup).\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[35,1],"name":"src/Internal/JsWebSocket.purs","end":[36,49]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"_onWsConnect","moduleName":"Ctl.Internal.JsWebSocket","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","JsWebSocket"],"JsWebSocket"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":"src/Contract/Wallet/KeyFile.purs","end":[35,49]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkKeyWalletFromFiles","moduleName":"Contract.Wallet.KeyFile","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Node","Path"],"FilePath"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Key"],"KeyWallet"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Load `PrivateKey`s from `skey` files (the files should be in JSON format as\naccepted by cardano-cli) given a network id.\nThe keys should have `PaymentSigningKeyShelley_ed25519` and\n`StakeSigningKeyShelley_ed25519` types, respectively.\nThe stake key is optional.\n\n**NodeJS only**\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[804,1],"name":"src/Contract/Test/Assert.purs","end":[807,28]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"assertOutputHasRefScript","moduleName":"Contract.Test.Assert","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","ScriptRef"],"ScriptRef"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Test","Assert"],"Labeled"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","TransactionOutput"],"TransactionOutput"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Test","Assert"],"ContractAssertion"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Requires that the transaction output contains the specified reference\nscript.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[54,1],"name":"src/Contract/Address.purs","end":[55,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkAddress","moduleName":"Contract.Address","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","PaymentCredential"],"PaymentCredential"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","StakeCredential"],"StakeCredential"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Contract","Monad"],"Contract"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Address"],"Address"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":".spago/cip30/8f1b34b48825fcec5e9c67f33e255770b1e0bc45/src/Cardano/Wallet/Cip30.purs","end":[69,51]},"score":0,"packageInfo":{"values":["cip30"],"tag":"Package"},"name":"enable","moduleName":"Cardano.Wallet.Cip30","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Cip30"],"WalletName"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Cip30"],"Extension"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Cardano","Wallet","Cip30"],"Api"]}]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Enables wallet and reads Cip30 wallet API if wallet is available\n"}],"tag":"SearchResult"}]