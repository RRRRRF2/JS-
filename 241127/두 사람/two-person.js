const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let a = Number(input[0]);
let b = input[1];
let c = Number(input[2]);
let d = input[3];

if((a >= 19 || c >= 19 ) && b == "M") console.log(1);
else console.log(0);