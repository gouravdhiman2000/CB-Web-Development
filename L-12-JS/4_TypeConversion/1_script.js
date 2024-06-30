console.log("0 == \\t", 0 == '\t'); //true - because of type conversion
console.log("0 == \\n", 0 == '\n'); //true - because of type conversion
console.log("\\t == \\n", '\t'== '\n'); //false - because of no type conversion


//to convert a value to a Number we can use + sign before it
console.log('Converting +\\t to Number :',+'\t'); 
console.log('Converting +\\n to Number :',+'\n'); 
console.log('Converting +"Hello" to Number :',+'Hello'); 
console.log('Converting +H to Number :',+'H'); 

// array compare with number
console.log("[] == 0 :", [] == 0);//true
// string compare with number
console.log("\\t == 0 :", '\t' == 0);//true
// array compare with string
console.log("[] == \\t:", [] == '\t');//false
//array coverted into number and compare with string
// string is converted into number
console.log("+[] == \\t :", +[] == '\t');//true