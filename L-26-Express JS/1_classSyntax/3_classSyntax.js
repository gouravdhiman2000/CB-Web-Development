class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.isBaalik = function(){
            return age>=18;
    
        }
    }
   
    // using classes
    printDetails(){
        console.log(`Name : ${this.name}, Age : {this.age}, Marks : ${this.marks}` );
    }
}

let gourav = new student("gourav",20, 81);

let keshav = new student("keshav",22,95);

if(gourav.isBaalik()){
    console.log("Baalik hai");
}
else{
    console.log("Naa baalik hai");
}

console.log(gourav);
console.log(keshav);

gourav.printDetails();
keshav.printDetails();

console.log(gourav.__proto__ == student.prototype);//true


// yeh jo printdetails function hai yeh student.prototype mei chla jayega automatically
console.log(student.prototype);