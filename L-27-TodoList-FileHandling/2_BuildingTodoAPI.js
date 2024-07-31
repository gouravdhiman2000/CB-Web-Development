/**Learning how to build API's*/
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//1.middleware function to make body readable on the backend
app.use(express.urlencoded({extended: true}));

//2.Learning to build todo app API
let todos = ["Dancing","Singing","Traveling","Coding","Basketball"];

// 2.1- GET '/todos': Return all the todos
app.get('/todos',(req,res)=>{
    res.send(todos);
});
// check in postman is it working properly or not

//2.2 - POST '/todos' : Add a new task to todo array
app.post('/todos',(req,res)=>{
    const {newTask} = req.body;
    // res.send(`Want to send ${newTask} to todos?`);
    //push the newtask to the todos array
    todos.unshift(newTask);
    // return the updated array of todos
    res.send(todos);
});

// 2.3 - GET '/delete' : delete a task from the todo list by name , name will come in quert parameter
app.get('/deletetask',(req,res)=>{
    const {name} = req.query;
    // res.send(`Trying to delete ${name} from todos`);
    //using filter function to delete a task from the todos array by its name
    // task agar name ke equal hota h toh vho aage nhi jaana chahiye
    todos = todos.filter((task) => task !== name);
    // return the updated array of todos
    res.send(todos);
});

//3. GET '/decrease' : decrease the pripority of a given task {name}
app.get('/decrease',(req,res)=>{
    const {name} = req.query;
    // res.send(`Trying to increase priority of ${name} from todos`);
    // ["Dancing","Singing","Traveling","Coding","Basketball"];
    let index = todos.indexOf(name);
    if(index !=-1 && index >=0 && index < todos.length -1){
        // Swapping
        // let temp = todos[index];
        // todos[index] = todos[index-1];
        // todos[index-1] = temp; 
        // another way of swapping is
        [todos[index], todos[index+1]] = [todos[index+1], todos[index]];
    }
    // return the updated array of todos
    res.send(todos);
});


//4. GET '/increase' : Increase the pripority of a given task {name}
app.get('/increase',(req,res)=>{
    const {name} = req.query;
    // res.send(`Trying to increase priority of ${name} from todos`);
    // ["Dancing","Singing","Traveling","Coding","Basketball"];
    let index = todos.indexOf(name);
    if(index !=-1 && index > 0 && index < todos.length){
        // Swapping
        // let temp = todos[index];
        // todos[index] = todos[index-1];
        // todos[index-1] = temp; 
        // another way of swapping is
        [todos[index], todos[index-1]] = [todos[index-1], todos[index]];
    }
    // return the updated array of todos
    res.send(todos);
});


app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});