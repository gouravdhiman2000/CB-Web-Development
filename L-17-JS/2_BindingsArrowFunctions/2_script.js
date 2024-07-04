
function hello(){
    console.log(this);

    /*
    function world(){
        // here this is not pointing to anywhere so it is a default binding - and it referred to the window or global scope
        console.log(this);
    }
    // default binding
    world();
    */
    let world = () => {
        // in arrow function - this does not work
        // so in this case - (this) will refer to its parent nad parent is referred to person
        console.log(this);
    }
    world();
}

let person ={
    name : "Chandan",
    age : 24
}

// explicit binding - hello ke andr this ko person bna degi
hello.call(person);
// here - jo this hello ke andr hai vho point krega person ko