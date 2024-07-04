let arr = [1,2,3,4,5]

let ans = arr.reduce((acc,val,indx,arr) => {
    console.log("Acc :", acc, "Val :", val);
    return acc * val;

},2);
// initial value - 2 is pass to accumulator

console.log(ans);