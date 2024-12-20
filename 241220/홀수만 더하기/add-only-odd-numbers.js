const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);


let n = Number(input[0]);
let result =0;

for(let i =1; i<=n; i++){
    let x = Number(input[i]);
    if(x%2 ==1 && x%3 ==0){
        result += x;
    }
}

console.log(result);