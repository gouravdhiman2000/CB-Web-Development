function add(a,b){
    return a+b;
}
console.log(add(10,20));


function sayHi(name){
    return "Hello "+name;
}
console.log(sayHi("Gourav"));


let sayHello= function hello(name){
    return "Oye, Hello "+name;

}
console.log(sayHello("Mithu"));
//console.log(hello("Mithu"));//hello is not defined
// since we invoke the function  hello(){} by the name 'hello' there is no use of writing it we can skip that part


// anonymous function - because function does not have a name
let sayBye = function(name){
    return "Bye "+name;
}
console.log(sayBye("Gourav"));





