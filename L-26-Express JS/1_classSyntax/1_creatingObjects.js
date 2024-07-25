// Act as Constructor function and constructor function doesn't return anything
function car (name,price){
    this.name = name;
    this.price = price;
}

let c = new car("bmw", 100);
console.log(c);

let maruti = new car("maruti",100);
    console.log(maruti);
