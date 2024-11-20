const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let d = Number(input[3]);
let e = Number(input[4]);

console.log(a>b ? 1 : 0);
console.log(a>c ? 1 : 0);
console.log(a>d ? 1 : 0);
console.log(a>e ? 1 : 0);