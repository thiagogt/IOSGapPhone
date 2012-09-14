var imagePathfile;


function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
       console.log(imageURI);

      // Get image handle
      //
	
      var largeImage = document.getElementById('myImage');

      // Unhide image elements
      //
      
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }
function getPhotoAlbum(){
	
}
function getPhoto(){
//	var source = navigator.camera.PictureSourceType.SAVEDPHOTOALBUM;
//	navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
//        destinationType: navigator.camera.DestinationType.FILE_URI,
//        sourceType: source });
	var largeImage = document.getElementById('myImage');

    // Unhide image elements
    //
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
	console.log("Esse eh o path: "+imagePathfile);
    largeImage.src = imagePathfile;
}
function errorHandler(e) {
	  var msg = '';

	  switch (e.code) {
	    case FileError.QUOTA_EXCEEDED_ERR:
	      msg = 'QUOTA_EXCEEDED_ERR';
	      break;
	    case FileError.NOT_FOUND_ERR:
	      msg = 'NOT_FOUND_ERR';
	      break;
	    case FileError.SECURITY_ERR:
	      msg = 'SECURITY_ERR';
	      break;
	    case FileError.INVALID_MODIFICATION_ERR:
	      msg = 'INVALID_MODIFICATION_ERR';
	      break;
	    case FileError.INVALID_STATE_ERR:
	      msg = 'INVALID_STATE_ERR';
	      break;
	    default:
	      msg = 'Unknown Error man';
	      break;
	  };

	  console.log('Error: ' + msg);
	}

function onInitFs(fileSystem) {
	  console.log('Opened file system: ' + fileSystem.name );
//	  fileSystem.root.getDirectory("imagens");
	  
	  
	  
	  
	}

function onSucess(imagePath) {
	
//	// Note: The file system has been prefixed as of Google Chrome 12:
//	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
//
//	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0 /*5MB*/, onInitFs, errorHandler);
	
	
	imagePathfile = imagePath;
	window.location.replace("../www/foto.html");
}

function onFail(message) {
    alert('Failed because: ' + message);
}
function takePhoto(){
    navigator.camera.getPicture(onSucess,onFail,{quality: 50, saveToPhotoAlbum: true});
}
            
