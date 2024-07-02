let id = setTimeout(function(){
    console.log("Hello World!")
},5000);

//console.log(id);

setTimeout(function(){
    clearTimeout(id);
},5000);

console.log("Hey there!");


