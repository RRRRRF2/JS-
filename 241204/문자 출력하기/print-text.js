const fs = require("fs");
let a = fs.readFileSync(0).toString();
let result ="";
for(let i =0; i<8; i++){
    result +=a;
}

console.log(result);