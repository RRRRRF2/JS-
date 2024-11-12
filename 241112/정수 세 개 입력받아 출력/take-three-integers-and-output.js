const fs = require("fs");
let input = fs.readFileSync(0).toString();

arr = input.split(/\s+/);  //정규표현식 \s+  ->  공백,탭,줄바꿈 등을 모두 포함

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

console.log(a,b,c)
