// arrow function
let hello = (name) => {
    console.log("Name :", name);
    console.log("A :", this.a);
}

this.a = 10;
hello("Gourav");

let obj ={
    a:3
}
// output is not this changing
// this is not applicable to arrow functions
// this arrow functions ke sath use nhi karte
hello.call(obj,"kartik");