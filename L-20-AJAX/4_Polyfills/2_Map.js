let arr = [1,2,3,4,5,6,7];


// Inbuilt working of map function
// let newArr = arr.map((val,indx,arr) => {
//     return val*val;
// });

// console.log(newArr);

// making polyfill of map

Array.prototype.myMap = function(fun){
    let arr = this;
    // console.log("Mera Map function ");
    let newArr = [];
    // iterating over older array 
    for(let i =0; i < arr.length; i++){
        let val = arr[i];
        // console.log(val);
          // Updated newArr
        let newVal = fun(val,i,arr);
        // console.log(newVal);
        newArr.push(newVal);
    }
    return newArr;
};

let x = arr.myMap((val,indx,arr) => {
    return val*val*val;
});

console.log(x);