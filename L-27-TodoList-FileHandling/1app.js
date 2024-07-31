const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// 3.middleware function to make body readable on the backend
app.use(express.urlencoded({extended: true}));

// act as middleware - send the public folder - index.html to the browser
app.use(express.static(path.join(__dirname, 'public')));

//5.middleware - to make axios data readable
app.use(express.json());

// 1.GET request
// app.get('/',(req,res)=>{
//     const {name} = req.query;
//     console.log(name);
//     res.send(`Hello, hope your are doing well ${name}`);
// });

//GET : /submit-form | API ka route hai
app.get('/submit-form',(req,res)=>{
    const{username, password} =req.query;
    res.send(`Received GET Request on /submit-form with ${username} , ${password}`);
});

//4.give app code
// app.get('/giveappcode',(req,res)=>{
//     res.sendFile(path.join(__dirname,'app.js'));
// })

//2.POST Request - body ke through request jayegi
//POST : /submit-form | API ka route hai
app.post('/submit-form',(req,res)=>{
    //terminal ke console ne body show ho jayegi
    console.log("Body-",req.body); //Body - undefind 
    // because by default body hidden hoti hai
    const{username, password} =req.body;
    res.send(`Received POST Request on /submit-form with ${username} , ${password}`);
});

app.listen(PORT,()=>{
    console.log(`http://localhost:` + PORT);
});