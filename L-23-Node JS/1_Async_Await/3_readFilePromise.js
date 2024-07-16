
const fs = require('fs/promises');
const filePath = __dirname + '/database/data.json';

function getData(filePath){
    return new Promise(async(resolve,reject)=>{
        try{
            let data = await fs.readFile(filePath);
            data = JSON.parse(data);
            resolve(data);
            }
            catch(err){
                console.log(err) 
        }
    });
}

getData(filePath)
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err);
    })