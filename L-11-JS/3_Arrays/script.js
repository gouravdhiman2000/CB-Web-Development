let arr=[1,2,3,4,5,6,7];
console.log(arr);
console.log("length:",arr.length);

// printing array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let str=' ';
for(let i=0;i<arr.length;i++){
   str += arr[i];
}

console.log(str);

//command line se input lene ka tarika JS mei
console.log(process.argv);

// taking input from user in the terminal
// these bracket value indicates indexes of the array
let inp1 = process.argv['2'];
let inp2 = process.argv['3'];
let inp3 = process.argv['4'];
let inp4 = process.argv['5'];

console.log(inp1,inp2,inp3,inp4);