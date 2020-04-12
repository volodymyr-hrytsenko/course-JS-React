/* --- умови -------------------- */

let num = 70;

// тернарна операція
(num == 50) ? console.log("Вірно") : console.log("Хибно");

switch (num) {
    case num > 80 :
        console.log("Забагато");
    break;
    case num < 40 :
        console.log("Недостатньо");
    break;
    case 50 :
        console.log("Вірно");
    break;
    default:
        console.log("Щось пішло не так");
    break;
}

/* ------- цикли ------------------------ */

let numTwo = 50;

// while(numTwo < 55) {
//     numTwo++;
//     console.log(numTwo);
// }

do {
    numTwo++;
    console.log(numTwo);
}
while (numTwo < 56);

for (let i = 1; i < 8; i++) {
    if (i == 5) {
        continue;  // пропускаэмо п'яту ітерацію
    }
    console.log(i);
}


/* ------- функції ------------------------- */

//arrow function
let add = (a, b) => a + b;
console.log(add(2,5));

// function exprission
let multiply  = function (a, b) {
    return (a * b);
};
console.log(multiply(2,5));

// function declaration
function retVar() {
    let num = 50;
    return num;
}

let otherNum = retVar();
console.log(otherNum);

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));