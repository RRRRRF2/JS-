const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(/\s+/);

for(let i =0; i<n.length; i++){
    if(Number(n[i]) % 2 ==1 && Number(n[i]) % 3 ==0){
        console.log(n[i]);
    }
}