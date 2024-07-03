
function download(url){
    return new Promise(function(resolve,reject){
        console.log("Dowmloading Starts from :", url);
        setTimeout(function(){
            let extension = url.split('.').pop();
            // indexOf which the index if present and if not it gives -1
            if(['webp','png','jpg'].indexOf(extension) != -1){
                let img = url.split('/').pop();
                resolve(img);

            }else{
                reject("Abey URl to sahi dede!");
            }
        },2000);
    })
}

function compress(file){
    return new Promise(function(resolve,reject){
        console.log("Compression Starts of :", file);
        setTimeout(function(){
            let compressedImg = file.split('.')[0]+'.zip';
            console.log("Compression Completed :", compressedImg);
            resolve(compressedImg);
        },2000);
    })
}

function upload(file){
    return new Promise(function(resolve,reject){
        console.log("Uploading Starts :",file);
        setTimeout(function(){
            let newLink = 'http://newsite.com/' + file;
            console.log("Uploading Completed of :", newLink);
           resolve(newLink);
        },2000);
    })
}

download('http://randomurl.com/avengers.jpg')
    .then(function(img){
        // console.log(img);
        console.log("Download Completed :",img);
        return img;
    })
    // .then is passed(img) to next .then which is compress function
    // here we only define the compress function and not calling it
    .then(compress)
    .then(upload)
    .then(function(newLink){
        console.log("Everything is Done : ", newLink)
    })
    .catch(function(err){
        console.log(err);
    })