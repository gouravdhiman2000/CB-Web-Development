let lib1 = require('./lib1');

console.log("Runnig lib2");
let b  = 30;


// making circular dependency
// getting the reference
module.exports.b = b;
module.exports.lib1 = lib1;