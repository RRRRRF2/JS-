const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let b = Number(input[0]);
let a = Number(input[1]);
let result ="";

for(i=b; i>=a; i--){
    if(i%2==1){
        result += i+ " ";
    }
}

console.log(result);