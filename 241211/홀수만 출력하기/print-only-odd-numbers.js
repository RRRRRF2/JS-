const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(/\s+/);

let cnt = Number(n[0]);

for(let i =1; i<=cnt; i++){
    if(Number(n[i]) % 2 ==1 && Number(n[i]) % 3 ==0){
        console.log(n[i]);
    }
}