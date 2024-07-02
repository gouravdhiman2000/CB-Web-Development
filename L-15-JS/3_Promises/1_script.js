// syntax
// let p =  new Promise(function(resolve,reject){});
//resolve ko call krna mtlb fulfill ho geya
// reject ko call krna mtlb fail ho gya
// p.then(resolve_ki_definition,reject_ki_definition);
// p.then(resolve_ki_definition).catch(reject);

let kyaVaadaPooraHua = true;

let p = new Promise(function(resolve,reject){
    if(kyaVaadaPooraHua){
        resolve("Vaada poora kr diya");
    }
    else{
        reject("Aisi taisi kar di vaade ki");
    }
});


// first way of calling or passing the resolve and reject function
// resolve function 
p.then(function(msg){
    console.log("Message aaya hai!",msg);
    //reject function
},function(err){
    console.log("Error aya hai!", err);
});

// second way of calling or passing the resolve and reject function
p.then(function(msg){
    console.log("Message aaya hai!",msg);
}).catch(function(err){
    console.log("Error aya hai!", err);
});