// Let is block scope, hoisting nhi hoti
//var  is functional scope , hoisting hoti hai

for(let i=0;i<5;i++){
    console.log(i);
}
//console.log(i);//error because let is block scope


for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i);// no error because var is functional scope


let x=1;
function fun(){
    // block scope
    console.log(x);//1
    let x=1;//cannot acces x before intializaltion
    console.log(x);
    x++;//2
}
fun();
console.log(x);//2

// ab VAR use nahi hota, we only use LET