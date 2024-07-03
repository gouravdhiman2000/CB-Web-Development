// Way -1
/*
let p = new Promise(function(resolve,rejeect){
    setTimeout(function(){
        resolve();//will be called after 3 seconds
    },3000);
});


p.then(function(msg){
    console.log("Resolve vala function run ho geya");
})
.catch(function(err){
    console.log(err)
});
*/


//Way -2

let p = new Promise(function(resolve,rejeect){
    resolve();// resolve is called immediately after creating the promise
    // function is not defined yet
    // because yeh function create hota hai inside . then()
})

setTimeout(function(){
    p.then(function(msg){
        console.log("Resolve vala function run ho geya");
    })
    .catch(function(err){
        console.log(err)
    });
},3000);// p.then is called after 3 sec
// here function calling is done first and function is created after 3 seconds