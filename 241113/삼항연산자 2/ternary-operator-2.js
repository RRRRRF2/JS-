const fs = require("fs");

let a = Number(fs.readFileSync(0).toString().trim());

let i = a = 1 ? "t" : "f";

console.log(i);