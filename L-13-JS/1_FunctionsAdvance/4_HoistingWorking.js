// first file code - is converted into this function get hoisted in JS and moves to the top of the code

// function aur var dono hoist ho gye
function sayHi(name){
    console.log("Hello",name);
}
var x;

console.log(x);

sayHi("Gourav");
x=10;
console.log(x);