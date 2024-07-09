let arr = [1,2,3,4,5,6,7];
let arr1 = [1,2,3,4,"Hello ",6];


// Inbuilt ForEach
// console.log("Inbuilt ForEach function:")
arr.forEach((data,indx,arr)=>{
    
    console.log("Index :",indx, "Data :", data, "Arr :",arr);
})

// Polyfill of forEach

// arr.meraForEach((data,indx,arr) => {
//     console.log("Index :",indx, "Data :", data, "Arr :",arr);
// })


Array.prototype.meraForEach = function(fun){
    console.log("This ->",this);
    // let arr = this;
    // fun = (data,indx,arr) => {
    //     console.log("Index :",indx, "Data :", data, "Arr :",arr);

    let arr = this;
    for (let i =0 ; i< arr.length ; i++){
        // passes all the data in the fun. function
        fun(arr[i],i,arr);
    }
}

// Polyfill of forEach
// this is in Array.prototype is point to the arr - implicit binding
// meraForEach is created in array.prototype
// console.log("mera ForEach  function:")

arr.meraForEach((data,indx,arr) => {
    console.log("Index :",indx, "Data :", data, "Arr :",arr);
})


// arr1.meraForEach((data,indx,arr) => {
//     console.log("Index :",indx, "Data :", data, "Arr :",arr);
// })


