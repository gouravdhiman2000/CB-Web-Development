const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
let codingBlocksDB;

function main() {
  return client.connect().then((client)=>{
    codingBlocksDB = client.db("codingBlocksDB");
  })
}
function getDB(){
    if(codingBlocksDB != undefined) return codingBlocksDB;

    return null;
}


module.exports.mongoConnect = main;
module.exports.getDB = getDB;
