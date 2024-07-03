function person(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

let gourav = new person("Gourav",18,"Trekking");
console.log(gourav);

let keshav = new person("keshav",24,"Smoking");
console.log(keshav);