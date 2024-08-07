const express = require('express');
const cluster = require('cluster');
const os = require('os');
const { log } = require('console');
const app = express();

let totalCPUs = os.cpus().length;
console.log(process.pid);

console.log(cluster.isPrimary,"This is my main thread");

if(cluster.isPrimary){
    for(let i=0; i<totalCPUs; i++){
        cluster.fork();
    }

}else{
    app.get('/',(req,res)=>{
        res.send({hi:`response from node instance ${process.pid}`});
    })
    
    app.get('/slowApi',(req,res)=>{
        for(let i =0 ; i<20_000_000_000; i++){
    
        }
        res.json({blocking:`response from node instance ${process.pid}`});
    })
    
    app.listen(4000);
}

