let i = require("fs").readFileSync(0).toString();
let arr = i.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

console.log(a*b);

