console.log("Running lib.js file");

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function checkPrime(n){
    for(let i=2; i < n ;i++){
        if(n % i == 0) return false;
    }
    return true;
}

module.exports = {
    add,
    subtract,
    checkPrime,
    msg: "Hello World"
}