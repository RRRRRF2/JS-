const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());
let i =0;

while(i<a){
    console.log("*");
    i++;
}