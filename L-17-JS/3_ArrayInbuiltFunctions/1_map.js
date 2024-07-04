let arr = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr.map(function(val,indx,arr){
    console.log("Val :",val, "Index :",indx, "Arr :", arr);
    return val*val;
})

console.log("Arr :",newArr);

// im arrow function single statement is a default return statement
let newArr1 = arr.map(val => val*val);
console.log("Arr1 :",newArr1);


let boolArr = arr.map((val) => {
    if(val % 2 == 0) return true;
    else return false;
})

console.log("boolArr :",boolArr);