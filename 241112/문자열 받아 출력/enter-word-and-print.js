const fs = require("fs");

let s = fs.readFileSync(0).toString().trim(); //trim -> 입력에 불필요한 공백이나 개행 문자가 있을 때 안전하게 제거

console.log(s);