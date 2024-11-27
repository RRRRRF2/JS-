const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let a1,b1;

if(a <= b && a <= c){
    a1 = 1;
}
else{
    a1 = 0;
}

if(a == b && a == c){
    b1 = 1;
}
else{
    b1 = 0;
}

console.log(a1, b1);