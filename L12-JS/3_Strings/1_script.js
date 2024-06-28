let str = "Hello";

console.log(str);

// loop
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

// for in loop in String- returns indexes of the string
for(let index in str){
    console.log(index);
}

// for of returns the elements in the string
for(let el of str){
    console.log(el);
}
