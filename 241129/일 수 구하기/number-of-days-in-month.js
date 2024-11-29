const fs = require("fs");
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let y = Number(fs.readFileSync(0).toString().trim());

function getDaysInMonth(month) {
    console.log(daysInMonth[month - 1]);
}

getDaysInMonth(y);