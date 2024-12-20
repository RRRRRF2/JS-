const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(/\s+/);


let result =0;

for(let i =1; i<=n; i++){
    let x = n[i];
    if(x%2 ==1 && x%3 ==0){
        result += x;
    }
}

console.log(result);