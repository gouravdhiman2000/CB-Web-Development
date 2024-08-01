const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//middleware function to make body readable on the backend
app.use(express.urlencoded({extended: true}));

// middleware for AXIOS data readable
app.use(express.json());

// Path specific middlewares
// Works for : /result, /result/a, /result/a/b/c
//Won't wor for: /resulta
app.use('/result',(req,res,next)=>{
    console.log("Running Result middleware");
    //next() - call hua toh request aage jaegi, else nhi jaegi
    next();
});


// Generic middleware: works for all requests
let x = true;
app.use((req,res,next)=>{
    console.log("Running Generic middleware");
    //next() - call hua toh request aage jaegi, else nhi jaegi
    if(x == false) return res.send("Not Allowed");
    next();
});



// function isLoggedIn(req,res,next){
//     let loggedIn = false;
//     if(loggedIn == false) return res.send("Login First");
//     next();
// }

//move this function to middlewares folder , name the file - isLoggedIn.js
const isLoggedIn = require('./middlewares/isLoggedIn');

//Exact path match middleware
app.get('/',isLoggedIn,(req,res,next)=>{
    res.send("Hello World!");
});


app.get('/result',(req,res)=>{
    res.send("Result Request recieved success");
});

app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});