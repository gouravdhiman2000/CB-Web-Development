// to use fs module we will have to require it in our file
// require file system (fs)
const fs = require('fs');
const { text } = require('stream/consumers');

// let filePath = ' F:\CB_Web_Development\L-22-NodeJS\1_FileHandling'

// filePath : Path absolute bhi hota hai - computer ki root directory se lekar jis bhi file mei data likhna hai us file tak ka path
// fs.writeFile(filePath)

// another way to getting the filePath
// it gives the path where is the particular file is running
// console.log(__dirname);

let filePath = __dirname + '/database/data.json'
// file can be txt or json
console.log(filePath);

let data = {
    text : 'Hello World',
    date : '16-July-2024'
}
// data type must be of string
// to convert data object to string we use - JSON.stringify(data)

// write file using callBack
// har jagah err first callBack function hote hai that means callBack function ke andr we'll have the err as the argument first
fs.writeFile(filePath, JSON.stringify(data) , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Sab kuch badhiya ho geya");
    }
});
    