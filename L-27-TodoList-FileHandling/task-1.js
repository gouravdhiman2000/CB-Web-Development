const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//middleware function to make body readable on the backend
app.use(express.urlencoded({extended: true}));

let students = [
    "Gourav", "Keshav" ,"Rohit", "Nikhil", "Anoop"
];

let teachers = [
    "Avni", "Archana", "Ananmika" ,"Shivani","Komal","Neha"
];


//1. GET -'/students' : GET Details of all the students
app.get('/students', (req, res) => {
    res.send(students);
});
//2. POST -'/students' : Add one student to students[]
app.post('/students',(req,res)=>{
    const {newStudent} = req.body;
    students.unshift(newStudent);
    res.redirect('/students');
});
//3. POST -'student/remove' : Remove the student by name provided in the queryParam
app.post('/student/remove',(req,res)=>{
    const {name} = req.body; //get the data from the request body
    students = students.filter(student => student !== name);
    res.redirect('/students');

});
//4. GET -'/teachers' : GET details of all teachers
app.get('/teachers', (req, res) => {
    res.send(teachers);
});
//5. POST -'/teacher/update' Update the name of the teacher using body {oldname , newName}
//For example : body :{oldname: "Avni", newName :"Avni Sharma"}
// ["Avni", "Archana", "Ananmika" ,"Shivani","Komal","Neha"];
//["Avni Sharma", "Archana", "Ananmika" ,"Shivani","Komal","Neha"];
app.post('/teacher/update',(req,res)=>{
    let {oldname, newName} = req.body;
    let index = teachers.indexOf(oldname);
    
   if(index != -1){
    teachers[index] = newName;
   }
    res.redirect('/teachers');
});

app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});