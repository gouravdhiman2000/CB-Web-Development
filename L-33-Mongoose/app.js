const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
//const {mongoConnect , getDB} = require('./connection/mongoConnect');
const { get } = require('http');

const mongoose = require('mongoose');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To store some information in DB
// POST: /student
// name, age, marks, subject

// students/:limit/:skip, prarmas
// students?limit=10&skip=0, queryparameter
app.post('/student',async (req,res)=>{
    const{name,age,marks} = req.body;
    
})

// GET: /students
// To get all students from DB
app.get('/students', async (req,res)=>{
    const db = getDB();

    let {limit,skip} = req.query;
    // converting string into Interger by adding + 

   
})

app.post('/update',async(req,res)=>{
    const db = getDB();
    
})

mongoose.connect('mongodb://localhost:27017/codingBlocks')
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`https://localhost:` +PORT);
    });
})
.catch(err=>{
    console.log(err);
})
