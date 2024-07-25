class Vehicle{
    constructor(){

    }
}

class Car extends Vehicle{
    constructor(){

    }
}

console.log(Car.prototype.__proto__ == Vehicle.prototype);//true


// in classes it inherits its properties from the Object.prototype
console.log(Vehicle.prototype.__proto__ == Object.prototype);//true


// in classes there is automatic linking we don't want to link manually as of functions