const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000;


let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));

// Yaha par get type ki request aati hai agar on path '/' toh what to do? Mention krna padega
// app.get(path,callback);
app.get('/', (req, res) => {
    // console.log(req);
    // to send response
    res.send("Hello, How are You?");
});

app.get('/greetings',(req,res)=>{
    res.send("Hello Sir, Good Evening!");
});

// learning params
// req: '/greet/aman/:city'
app.get('/greet/:name',(req,res)=>{
    console.log(req.params);
    res.send(`Aur kya hal chal hai ? ${req.params.name}`);
});


// quert parameter
// req: '/bye?name=aman&city=delhi'
app.get('/bye',(req,res)=>{
    console.log(req.query);
    res.send(`Aur chalo milte hai baad mei ? ${req.query.name} from ${req.query.city}`);
});

// to send the html part we use the
// sendFile function it takes absolute path
// for  this require the path module and path.join function
app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

/*
we don't want to do this - add manually adding the files one by one
// including the script file
app.get('/script.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'script.js'));
});


// including the style.css file
app.get('/style.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'style.css'));
});
*/

// alternative to the above of adding the file manually one by one is
// to send all the files inside a folder to the browser at once
// include at top of the file


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});  //this will start the server