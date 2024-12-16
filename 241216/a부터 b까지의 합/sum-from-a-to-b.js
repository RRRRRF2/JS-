const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let sum = 0;
let a = Number(input[0]);
let b = Number(input[1]);
for(let i =a; i<=b; i++){
    sum +=i;
}

console.log(sum);