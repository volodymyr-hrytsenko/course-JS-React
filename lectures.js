/* --- умови ------- */

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

/* ------- цикли ------ */

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