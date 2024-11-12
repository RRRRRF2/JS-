const fs = require("fs");
let input = fs.readFileSync(0).toString();

arr = input.split(/\s+/);

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

console.log(a,b,c)