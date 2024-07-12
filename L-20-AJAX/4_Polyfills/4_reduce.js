let arr = [1,2,3,4,5];

Array.prototype.myReduce = function(fun, initVal){
    let arr = this;
    let acc, start_index;

    if(typeof(initVal) != "undefined"){
        acc = initVal;
        start_index = 0;
    }

   
    // phle acc mei 0th index ki value ko add kr do
    else{
         acc = arr[0];

         start_index = 1;
    }

    for( let i = start_index; i < arr.length ; i++){
       
    //    fun = (acc,value,indx,arr) => {
    //     return acc * value;
    // }
    // fun(a,b,i,arr);
    // return  a *b;
        acc = fun(acc,arr[i],i,arr);


    }

    return acc;

};


let x = arr.myReduce((acc,value,indx,arr) => {
    return acc * value;
});
// initial value

console.log(x);