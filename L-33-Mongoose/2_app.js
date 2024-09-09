const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const {mongoConnect , getDB} = require('./connection/mongoConnect');
const { get } = require('http');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To store some information in DB
// POST: /student
// name, age, marks, subject
app.post('/student',async (req,res)=>{
    const{name,age,marks} = req.body;
    const db = getDB();
    let students = db.collection('students');
    let stu = await students.insertOne({
        name,
        age,
        marks
    })
    res.send({
        message: "Student Added Successfully",
        data: stu
    })
})

// GET: /students
// To get all students from DB
app.get('/students', async (req,res)=>{
    const db = getDB();

    let {limit,skip} = req.query;
    // converting string into Interger by adding + 

    limit = +limit; //or limit = parseInt(limit) , or limit = Number(limit)
    skip = +skip;
    let students = db.collection('students');

    // find returns the cursor, to get the data from it use toArray() function
    let stu = await students.find().skip(skip).limit(limit).toArray();
    console.log(stu);
    res.send({
        data: stu
    })
})

app.post('/update',async(req,res)=>{
    const db = getDB();
    let {name,age,marks} = req.body;
    let students = db.collection('students');
    let stu = await students.updateOne({name:name},{ $set: {age:age,marks}});
    res.send({
        message: "Student Updated Successfully",
        data: stu
    })
})

mongoConnect()
.then(()=>{
    console.log("DB Connection Success");
    app.listen(PORT,()=>{
        console.log(`https://localhost:` +PORT);
    });
})
.catch(err=>{
    console.error("Error aa geya DB connection mei !!!!");
})