const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let a = input[0];
let a1 = Number(input[1]);
let b = input[2];
let b1 = Number(input[3]);
let c = input[4];
let c1 = Number(input[5]);

let A =0; 

if(a == "Y" && a1 >=37){
    A +=1;
}
if(b == "Y" && b1 >=37){
    A +=1;
}
if(c == "Y" && c1 >=37){
    A +=1;
}

if(A >=2) console.log("E");
else console.log("N");