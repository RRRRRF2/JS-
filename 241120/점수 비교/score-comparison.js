const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let a = Number(input[0]);
let a1 = Number(input[1]);
let b = Number(input[2]);
let b1 = Number(input[3]);

if(a>b && a1>b1){
    console.log(1);
}
else{
    console.log(0)
}
