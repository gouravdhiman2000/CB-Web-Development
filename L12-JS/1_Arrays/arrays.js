let arr = [1,2,3,4, "Hello", true, 1.11];
console.log(arr);

// insertion at front
arr.unshift("Valentine");
console.log(arr);
// deletion from front
arr.shift(arr);
console.log(arr);

// insertion at end
arr.push("Basant pachmi");
console.log(arr);

// deletion from end
arr.pop(arr);
console.log(arr);

// For of Loop to go any element index in the array
for(let el of arr){
    console.log(el);
}

// Searching key- return index of the key and if key is not present then it return -1
let index = arr.indexOf("Hello");
console.log("Index-",index);

// for in loop in String- returns indexes of the string
for(let index in arr){
    console.log(index);
}