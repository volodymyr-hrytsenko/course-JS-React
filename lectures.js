/* --- умови -------------------- */

let num = 70;

// тернарна операція
(num == 50) ? console.log("Вірно"): console.log("Хибно");

switch (num) {
    case num > 80:
        console.log("Забагато");
        break;
    case num < 40:
        console.log("Недостатньо");
        break;
    case 50:
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
        continue; // пропускаэмо п'яту ітерацію
    }
    console.log(i);
}


/* ------- функції ------------------------- */

//arrow function
let add = (a, b) => a + b;
console.log(add(2, 5));

// function exprission
let multiply = function (a, b) {
    return (a * b);
};
console.log(multiply(2, 5));

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


/* ------- об'єкти ------------------------- */

let parametrs = {
    width: 1024,
    height: 800,
    color: "red",
    opasity: 80
};

for (let key in parametrs) {
    console.log(key + ": " + parametrs[key] + ";");
}

delete parametrs.opasity;

console.log(Object.keys(parametrs).length);

/* ------- масиви ------------------------- */


let arr = ["one", 3, "four", 5, 7];

arr.forEach(function (item, i, mass) {
    console.log(i + ": " + item + "(масив: " + mass + ")");
});

for (let key of arr) {
    console.log(key);
}

// let mass = ["apale", "nudels", "souse"],
//     i = mass.join(", ");

// console.log(i);

// let mass = ["bread", "apale", "souse", "nudels"],
//     i = mass.sort();

// console.log(i);

let numbers = [10, 3, 14, 5];

numbers.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(numbers);

/* ------- ООП ------------------------- */

let solder = {
    health: 400,
    arme: 100
};

let john = {
    health: 100
};

john.__proto__ = solder;

console.log(john);
console.log(john.arme);