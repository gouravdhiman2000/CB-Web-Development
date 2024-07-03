function outerFun(){
    console.log("Outer Fun",this);
    function innerFun(){
        console.log("Inner Fun",this);
        // here this points to window because its a default this
    }
    innerFun();
}

let obj = {
    a : 1,
    b : 2
}

outerFun.call(obj);