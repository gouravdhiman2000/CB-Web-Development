function vehicle(company_name){

}

function car(company_name, model){

}


// linking
car.prototype = Object.create(vehicle.prototype);

car.prototype.constructor = car;

vehicle.prototype.constructor = vehicle;

console.log(car.prototype.__proto__);//{}

console.log(car.prototype.__proto__ == vehicle.prototype);//true

console.log(vehicle.__proto__);//{}

console.log(vehicle.__proto__ == Function.prototype);//true

console.log(car.prototype.__proto__ == vehicle.prototype);// true