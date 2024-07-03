let obj = {
    a : 1,
    b : 2,
    fun : function(){
        console.log(this);
        console.log("a",this.a);
        console.log("b",this.b);
        // adding another key
        this.c = "hello";
    
    }
}
// dot operator se call karne par function ko, function ke andr ka this point krta hai "obj" object ko
obj.fun();
// here the this in the function is refered to the obj

console.log(obj);