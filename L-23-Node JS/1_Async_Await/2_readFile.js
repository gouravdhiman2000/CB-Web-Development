const fs = require('fs/promises');

const filePath = __dirname + '/database/data.json';

let data = ['coding','dancing','singing'];


// 1. Using promise
// fs.readFile(filePath,{
//     encoding : 'utf-8'
// })
//     .then((data)=>{
//         data = JSON.parse(data);
//         data.forEach(d=>{
//             // printing elements as array of elements
//             console.log(d);
//         })
//         // printing as JS  object
//         console.log(data);
//         console.log("Badhiya ho gaya saara kaam")
//     })
//     .catch(err=>{
//         console.log(err);
//     });


// 2. Using async - await
async function getData(){
    try{
        let data = await fs.readFile(filePath);
        data = JSON.parse(data);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
getData();