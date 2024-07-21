const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname,'public')));

// sending the file to the browser
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });


app.get('/getTask',(req,res)=>{
    // accessing the query parameter(req.query)
    // query parameter is used to send the data to the backend
    console.log(req.query);

    const {task} = req.query;
    // it response the data to whom it is requested here the request is done by the browser and shown the data on the browser as well
    res.send(task);


});

app.listen(PORT,()=>{
    console.log(`http://localhost:` +PORT);
});
