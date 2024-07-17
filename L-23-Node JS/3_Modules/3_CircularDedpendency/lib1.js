let lib2 = require('./lib2');

console.log("Runnig lib1");
let a = 10;

// making circular dependency
module.exports.a = a;
module.exports.lib2 = lib2;
