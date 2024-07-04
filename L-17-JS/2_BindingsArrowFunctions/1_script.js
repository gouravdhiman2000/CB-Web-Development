let obj = {
    a : 1,
    b : 2,
    // arrow function ke andr this work nhi krta hai
    // arrow function are lamba function
    // here , this will point to window and c would be added to the window itself
    fun : () => {
        console.log(this);
        this.c = "Hello";
    }
}
// this which is inside func is pointing to obj
obj.fun();
console.log(obj);