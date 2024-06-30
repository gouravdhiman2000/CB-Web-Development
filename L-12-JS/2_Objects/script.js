let obj={
    a:1,
    "Hello world":"Earth",
    "":'Empty String',
    " ":"Space"
};

console.log(obj.a);
console.log(obj["a"]);
console.log(obj["Hello world"]);

// for in loop used to accesing the keys in obj
for(let k in obj){
    console.log(obj[k]);
}

// Searching key
let index = arr.indexOf("Hello");
console.log("Index-",index);