// Act as Constructor function and constructor function doesn't return anything
function student (name,age,marks){
    this.name = name;
    
    this.marks = marks;
    // want to hide the age of the student
    this.isBaalik = function(){
        return age>=18;

    }

}
// using function
student.prototype.printdetails = function(){
    console.log(`Name : ${this.name}, Age : {this.age}, Marks : ${this.marks}` );
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

gourav.printdetails();
keshav.printdetails();