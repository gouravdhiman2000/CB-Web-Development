function fun(){
    console.log(x);//undefined
    var x = 10;
    console.log(x);//10
}

fun();
for(var i=0;i<10;i++){

}
console.log(i);//undefined
console.log(x);//undefined
