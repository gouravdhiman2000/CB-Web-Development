// alternative of second script file
function maggieLekarAaunga(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let dukhanKhuliHai = false;
            if (dukhanKhuliHai){
                resolve("Maggie mil gai");
            }
            else{
                reject("Maggie nhi mili, dukan band hai");
            }
        },3000);
    })
}

maggieLekarAaunga()
//handler
.then(function(msg){
    console.log(msg);
})
//handler
.catch(function(err){
    console.log(err);
}) 