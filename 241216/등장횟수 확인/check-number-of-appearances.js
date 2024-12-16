const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let cnt =0;
for(i=0; i<5; i++){
    let x = input[i];
    if(x % 2 ==0){
        cnt++;
    }
}

console.log(cnt);