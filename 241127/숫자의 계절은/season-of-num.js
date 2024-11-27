const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

if(3<= a && a <= 5) console.log("Spring");
else if(6<= a && a <= 7) console.log("Summer");
else if(9<= a && a <= 11) console.log("Fall");
else if(a == 1 || a == 2 || a == 12) console.log("Winter");