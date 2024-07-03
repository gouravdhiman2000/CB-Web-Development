function hello(state, country){
    console.log("Name",  this.name);
    console.log("Hobby", this.hobby);

    console.log("State", state);
    console.log("Country", country);
}


let person1 = {
    name : 'Gourav',
    hobby : 'Treking'
}


let person2 = {
    name : 'Keshav',
    hobby : 'Smoking'
}

//  1. Call ke through bind karna: Inbuilt function to change the binding inside the 'hello' function

// syntax : hello.call(this, arguments);

/*hello.call(person2, "H.P.", "India");*/
 // hello ke andr jo this hoga that will point to 'person1'

// /*hello.call(person2, "H.P.", "India"); *
// hello ke andr jo this hoga that will point to 'person2'

//  2. Apply ke through bind karna: Inbuilt function to change the binding inside the 'hello' function

// SYNTAX : hello.apply(this, [arguments]);
//here arguments are written inside the array
hello.call(person2, ["H.P."], ["India"]);

// call and apply ekdum immediately function ko call/invoke kr dete hai instant


// 3. Bind ke through this ko change karna
// Bind function ko immediately function ko call nhi  karta - instant vo apko function return kr deta hai that can be called later ob

let f = hello.bind(person1);
f("NewYork","USA");

let f1 = hello.bind(person2,"Pune");
f1("India");