const { rejects } = require('assert');
const { json } = require('express');
const fs = require('fs/promises');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'todos.json');

class Tasks{
    //11.
    static getTodos(){
        return new Promise(async(resolve,reject)=>{
            try{
                const data = await fs.readFile(filePath);
                resolve( JSON.parse(data));
            }
            catch(err){
                reject(err);
            }

        });
    }

    //12.
    static  addTask(task){
        return new Promise (async(resolve,reject)=>{
            //1. read the existing data
            try{
                let data = await fs.readFile(filePath);
                let tasks = JSON.parse(data);
            
                //2. add the task into the existing data :["Cricket","Hockey"]
                tasks.unshift(task);
                //3. Update the todos.jsoon
                await fs.writeFile(filePath,JSON.stringify(tasks));

                resolve("Success adding Task")
                }
                catch(err){
                    reject(err);
                }
        })
    }


    //13.
    static deleteTask(name){
        return new Promise(async (resolve,reject)=>{
            try{
                //1. read the existin file
                let data = await fs.readFile(filePath);
                let tasks = JSON.parse(data);

                //2. delete the task from tasks array
                tasks = tasks.filter((t)=> t !== name);

                //3. update the todos.json
                await fs.writeFile(filePath,JSON.stringify(tasks));

                resolve("Success deleting Task")
            }
            catch(err){
                reject(err);
            }
        });
    }


    static increasePriority(task){
        return new Promise(async (resolve,reject)=>{
            try{
                //1. read the existin file
                let data = await fs.readFile(filePath);

                let todos = JSON.parse(data);

                //2. update the task array
                let index = todos.indexOf(task);
                if(index !=-1 && index > 0 && index < todos.length){
                    [todos[index], todos[index-1]] = [todos[index-1], todos[index]];
                }

                //3. update the todos.json
                await fs.writeFile(filePath,JSON.stringify(todos));

                resolve("Success Increase Priority of Task")
            }
            catch(err){
                reject(err);
            }
        });
    }


    static decreasePriority(task){
        return new Promise(async (resolve,reject)=>{
            try{
                //1. read the existin file
                let data = await fs.readFile(filePath);

                let todos = JSON.parse(data);

                //2. update the task array
                let index = todos.indexOf(task);

                 if(index !=-1 && index >= 0 && index < todos.length-1){
               [todos[index], todos[index+1]] = [todos[index+1], todos[index]];
                 }

                //3. update the todos.json
                await fs.writeFile(filePath,JSON.stringify(todos));

                resolve("Success Decrease Priority of Task")
            }
            catch(err){
                reject(err);
            }
        });
    }
}
    

module.exports = Tasks;