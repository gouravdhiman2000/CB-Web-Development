const fs = require('fs/promises');

const filePath = __dirname + '/database/data.json';

let data = ['coding','dancing','singing'];

fs.writeFile(filePath, JSON.stringify(data))
    .then(()=>{
        console.log("Badhiya ho gaya saara kaam")
    })
    .catch(err=>{
        console.log(err);
    });