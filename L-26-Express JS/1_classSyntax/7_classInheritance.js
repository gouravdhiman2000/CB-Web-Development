// Syntactical sugar syntax
class Vehicle{
    constructor(company){
        this.company = company;
    }
}


//car tab tak create nahi ho skti jab tak vehicle create na ho jaye
class Car extends Vehicle{
    constructor(company,name, price){
        // super is used for creating the vehicle first than after the car can be create
        // super is used to call the constructor of parent class  -- to create vehicle
        super(company);
        this.name = name;
        this.price = price;
    }
}

class Suv extends Car{
    constructor(company,name,price,type){
        super(company,name,price);
         this.type = type;
        }
    }


let maruti = new Car("Maruti","Lord Alto", 100);
console.log(maruti);

let fortuner = new Suv("Toyota","Fortuner",50,"Suv");
console.log(fortuner);