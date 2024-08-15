const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
// const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));





// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// let codingBlocksDB = undefined;

// async function main() {
//     if(codingBlocksDB != undefined) return codingBlocksDB;

//   // Use connect method to connect to the server
//   await client.connect();

//   console.log('Connected successfully to server');
// // Create a collection and get a reference to it
// // server->database->collection->document
//   codingBlocksDB = client.db("codingBlocks");
// //   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

main()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`https://localhost:` +PORT);
    });
})
.catch(err=>{
    console.error("Error aa geya DB connection mei !!!!");
})



