var i;

function fun(){
    var x;
    console.log(x);//undefined
    x = 10;
    console.log(x);//10
}

fun();
for(i=0;i<10;i++){

}
console.log(i);//10
//console.log(x);//error
