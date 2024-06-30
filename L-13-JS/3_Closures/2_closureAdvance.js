function grandparent(){
    var x=1;
    function parent(){
        x++;
        function child(){
            x++;
            console.log(x);
        }
        return child;
    }
    return parent;
}

let f = grandparent();

let f1 = f();
let f2 = f();

f1();//4
f1();//5
f2();//6
f2();//7

