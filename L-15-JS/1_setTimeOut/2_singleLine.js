// single line statement ke andar setTimeOut and clearTimeOut functions ka use karna hai

let id = setTimeout(function(){
    console.log("Hello World!")
},5000,setTimeout(function(){
    console.log("Hey there!");
    clearTimeout(id);
},6000));