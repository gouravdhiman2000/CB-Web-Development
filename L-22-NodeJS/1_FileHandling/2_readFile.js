const fs = require('fs/promises');

let filePath = __dirname + '/database/data1.json'

/*
fs.readFile(filePath)
    .then((data)=>{
        // this show data in form of buffer
        console.log(data);
        // converting the buffer data to string
        console.log((data).toString());
    })
    .catch(err=>{
        console.log(err);
    });
*/

// when we include encoding we don not need to convert the data to string it handles it automatically
fs.readFile(filePath, {encoding : 'utf-8'})
    .then((data)=>{
        // JSON to JS Object
        data = JSON.parse(data);
        console.log(data);
        
    })
    .catch(err=>{
        console.log(err);
    });