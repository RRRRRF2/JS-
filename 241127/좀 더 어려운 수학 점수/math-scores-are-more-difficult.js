const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let m = Number(input[0]);
let e = Number(input[1]);
let m2 = Number(input[2]);
let e2 = Number(input[3]);

if(m > m2) console.log("A");
else if(m < m2) console.log("B");
else if(m == m2 && e > e2) console.log("A");
else if(m == m2 && e < e2) console.log("B");

