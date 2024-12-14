const fs =require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let cnt3 =0, cnt5=0;


for(let i =0; i<10; i++){
    let x = Number(input[i])
    if(x % 3 ==0){
        cnt3++;
    }
    if(x % 5 ==0){
        cnt5++;
    }
}

console.log(cnt3, cnt5);
