const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split(/\s+/);

let cnt = 0;

for(let i =0; i<n.length; i++){
    if(Number(n[i]) % 2 ==1){
        cnt++;
    }
}
console.log(cnt);