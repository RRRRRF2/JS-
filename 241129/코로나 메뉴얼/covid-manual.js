const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0].split(" ");
let b = input[1].split(" ");
let c = input[2].split(" ");

let as = a[0] , at = Number(a[1]);
let bs = b[0] , bt = Number(b[1]);
let cs = c[0] , ct = Number(c[1]);

if(as === "Y" && at >= 37){
    if(bs === "Y" && bt >= 37 || cs === "Y" && ct >= 37){
        console.log("E");
    }
    else{
        console.log("N");
    }
}
else{
    if((bs === "Y" && bt >= 37) && (cs === "Y" && ct >= 37)){
        console.log("E");
    }
    else{
        console.log("N");
    }
}

