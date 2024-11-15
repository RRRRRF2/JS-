const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

if(a<b){
    a = 1;
}
else{
    a = 0;
}

if(a === b){
    b = 1;
}
else{
    b = 0
}
console.log(a, b);