function outerFun(){
    // inner function create kia hai
    function innerFun(){
        console.log("Inside Inner Fun");
    }
    return innerFun;
}

// calling outerFun function
let f =  outerFun();
console.log(f());


function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function doOperation(add,subtract){
    console.log(add(10,20));
    console.log(subtract(10,20));
}

// calling the function
doOperation(add,subtract);

// another way
doOperation(function add(a,b){
    return a+b;
},function subtract(a,b){
    return a-b;
});

