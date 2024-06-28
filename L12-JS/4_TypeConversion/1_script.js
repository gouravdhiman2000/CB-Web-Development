console.log("0 == \\t", 0 == '\t'); //true - because of type conversion
console.log("0 == \\n", 0 == '\n'); //true - because of type conversion
console.log("\\t == \\n", '\t'== '\n'); //false - because of no type conversion


//to convert a value to a Number we can use + sign before it
console.log('Converting +\\t to Number :',+'\t');