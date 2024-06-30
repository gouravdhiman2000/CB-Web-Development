function parent(){
    var x=10;
    function child(){
        x++;
        console.log(x);
    }
    return child;
}

let f = parent();
let f1 = parent();
f();//11
f();//12
f();//13

f1();//11
f1();//12
f1();//13