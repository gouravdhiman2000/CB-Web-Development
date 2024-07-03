
function hello(name){
    console.log("Name :", name);
    console.log("A :", this.a);
}

this.a = 10;
hello("Gourav");

let obj ={
    a:3
}

hello.call(obj,"kartik");