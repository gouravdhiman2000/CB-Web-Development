class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printDetails(){
        console.log("Name:" , this.name ,"Age:", this.age);    
    }

    get StudentName(){
        return this.name;
    }
    // set use for updation
    set StudentName(name){
        this.name = name;
    }
}

let gourav = new Student("gourav",20);

let keshav = new Student("keshav",22);


gourav.printDetails();
keshav.printDetails();


// getter and setters are functions but we can use them as properties...

gourav.StudentName = "Gourav Kumar Dhiman";
console.log("Student Name is :", gourav.StudentName);