//function useAsyncFS(fs) {
//  // see getAsText example in [FILE-API-ED].
//  fs.root.getFile("already_there.txt", null, function (f) {
//    getAsText(f.file());
//  });
//
//  // But now we can also write to the file; see [FILE-WRITER-ED].
//  fs.root.getFile("logFile", {create: true}, function (f) {
//    f.createWriter(writeDataToLogFile);
//  });
//}
//requestFileSystem(TEMPORARY, 1024 * 1024, function(fs) {
//  useAsyncFS(fs);
//});
//
//// In a worker:
//function getFile(){
//	var tempFS = requestFileSystem(LocalFileSystem.PERSISTENT,0);
//	var logFile = tempFS.root.getFile("logFile", {create: true});
//	var writer = logFile.createWriter();
//	writer.seek(writer.length);
//	writeDataToLogFile(writer);
//	alert(writer);
//}

 

    // PhoneGap is ready
    //
    function onDeviceReadyForFile() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }

    function gotFS(fileSystem) {
        fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
    	alert(fileEntry.fullPath);
    	var uri = fileEntry.toURI();
    	alert(uri);
    	
        fileEntry.createWriter(gotFileWriter, fail);
    }

    function gotFileWriter(writer) {
        writer.onwriteend = function(evt) {
            console.log("contents of file now 'some sample text'");
            writer.truncate(11);  
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample'");
                writer.seek(4);
                writer.write(" different text");
                writer.onwriteend = function(evt){
                    console.log("contents of file now 'some different text'");
                }
            };
        };
        writer.write("some sample text");
    }

    function fail(error) {
        console.log(error.code);
    }
   