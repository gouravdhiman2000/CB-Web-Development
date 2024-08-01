/**Learning how to build API's*/
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;



//5. will send the index.html of the public folder(if present)
app.use(express.static(path.join(__dirname, 'public')));

//7. middleware for AXIOS data readable
app.use(express.json());

//1.middleware function to make body readable on the backend
app.use(express.urlencoded({extended: true}));



//2.Learning to build todo app API
// let todos = ["Dancing","Singing","Traveling","Coding","Basketball"];

// 10. requiring controller/todos.js
const  Tasks = require('./controller/todos');

// 2.1- GET '/todos': Return all the todos
app.get('/todos',async(req,res)=>{
    //11.
    try{
        let todos = await Tasks.getTodos();
        res.send(todos);
    }
    catch(err){
        res.send(err);
    }
    // res.send(todos);
});


//2.2 - POST '/todos' : Add a new task to todo array
app.post('/todos',async(req,res)=>{

    try{
        const {newTask} = req.body;
        let data = await Tasks.addTask(newTask);
        res.redirect('/todos');

    }
    catch(err){
        res.send(err);
    }

});

// 2.3 - GET '/delete' : delete a task from the todo list by name , name will come in quert parameter
app.get('/deletetask',async (req,res)=>{
    try{
        const {name} = req.query;
        let msg = await Tasks.deleteTask(name);
        res.redirect('/todos');
    }
    catch(err){
        res.send(err);
    }   

});

//3. GET '/decrease' : decrease the pripority of a given task {name}
app.get('/decrease',(req,res)=>{
    const {name} = req.query;
    Tasks.decreasePriority(name)
        .then((msg)=>{
            res.redirect('/todos');
        })
        .catch(err=>{

        })
});


//4. GET '/increase' : Increase the pripority of a given task {name}
app.get('/increase',(req,res)=>{
    
    const {name} = req.query;
    Tasks.increasePriority(name)
        .then((msg)=>{
            res.redirect('/todos');
        })
        .catch(err=>{

        })
        
});


app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});