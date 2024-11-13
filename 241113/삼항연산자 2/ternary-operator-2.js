const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();

let i = a = 1 ? "t" : "f";

console.log(i);