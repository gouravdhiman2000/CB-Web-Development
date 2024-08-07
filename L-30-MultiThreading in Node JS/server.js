const express = require('express');
// requiring cluster module for multithreading in NodeJS
// cluster module helps us to create multiple instance of node
const cluster = require('cluster');
const os = require('os');
const app = express();

//no. of cores
let  numCPUs = os.cpus().length;
// console.log(`Number of CPU cores: ${numCPUs}`);


//getting process id of node server
console.log(`Process ID: ${process.pid}`);

//platform we are using
// let platform = os.platform();
// console.log(`Platform: ${platform}`);

// cluster.isPrimary -> this will tell me if i am on main thread


if(cluster.isPrimary){
    // making instances of main thread equal to the number of core in the CPU
    for(i =0 ; i<numCPUs; i++){
        cluster.fork();
    }
}
else{
    app.get('/',(req,res)=>{
        // res.send('Hello World!')
        res.json({message: 'Hello World!', pid: process.pid})
    })
    
    app.get('/slowApi',(req,res)=>{
        for(let i =0 ; i<10_000_000_000; i++){
    
        }
        res.json({blocking:'blocking api response' , pid: process.pid})
    })
    
}





app.listen(4000);
