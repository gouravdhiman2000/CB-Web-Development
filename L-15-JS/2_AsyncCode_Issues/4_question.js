// download -> compress -> upload

function download(callBack){
    console.log("Download Starts")
    setTimeout(function(){
        console.log("Dowmloading file");
        callBack(upload);
    },2000);
}//2 sec


function compress(callBack){
    console.log("Compression Starts");
    setTimeout(function(){
        console.log("Compressing the Dowmloaded file");
        callBack();
    },2000);
}//2 sec

function upload(){
    console.log("Uploading Starts");
    setTimeout(function(){
        console.log("Uploading the Dowmloaded file");
    },2000);
}//2sec

// calling
download(compress);