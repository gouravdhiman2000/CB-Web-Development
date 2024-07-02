let maggieLekarAaunga = new Promise(function(resolve,reject){
    setTimeout(function(){
        let dukhanKhuliHai = false;
        if (dukhanKhuliHai){
            resolve("Maggie mil gai");
        }
        else{
            reject("Maggie nhi mili!");
        }
    },3000);
});

maggieLekarAaunga.then(function(msg){
    console.log(msg)
}).catch(function(err){
    console.log(err);
});