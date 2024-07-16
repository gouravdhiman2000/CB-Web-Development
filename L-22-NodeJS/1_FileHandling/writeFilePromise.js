const fs = require('fs/promises');

let filePath = __dirname + '/database/data1.json'
console.log(filePath);

let data = {
    text : 'Hello World',
    date : '16-July-2024' 
}

// write file with promises
fs.writeFile(filePath, JSON.stringify(data))
    .then(() => {
        console.log("Badhiya chal geya!");
    })
    .catch(err => {
        console.log(err);
    });