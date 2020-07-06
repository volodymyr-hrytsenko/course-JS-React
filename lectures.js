/* --- умови -------------------- */

let num = 70;

// тернарна операція
// (num == 50) ? console.log("Вірно"): console.log("Хибно");

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
    colors: {
        border: 'black',
        bg: 'red',
        height: 987
    },
    opasity: 80,
    makeTest: function () {
        console.log('test');
    }
};


parametrs.makeTest();

// деструктуризація
const {
    border,
    bg
} = parametrs.colors;

console.log(border);
console.log(bg);

for (let key in parametrs) {
    if (typeof (parametrs[key]) === 'object') {
        for (let i in parametrs[key]) {
            console.log(i + ": " + parametrs[key][i] + ";");
        }
    } else {
        console.log(key + ": " + parametrs[key] + ";");
    }
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
/* -------- Передача по силкі і по значенню (поверхнеае клонування)---- */

// обєкти
const object = {
    a: 2,
    d: 34
};

const clone = Object.assign({}, object);

object.a = 27;

console.log(clone);
console.log(object);

// масиви
const oldArray = ['s', 'f', 'n', 'f'];
const newArray = oldArray.slice();

newArray[1] = 'hgh';

console.log(newArray);
console.log(oldArray);

// spread  оператор

const video = ['youtube', 'vimeo', 'instagram'],
    blogs = ['wordpress', 'livejormal', 'blogger'],
    internet = [...video, ...blogs, 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const number = [2, 45, 4];
log(...number);

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};

newObj.one = 111;

console.log(q);
console.log(newObj);
/* ------- ООП ------------------------- */

const solder = {
    health: 100,
    arrm: 400,
    sayHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(solder);

// const jonh = {
//     health: 100
// };

Object.setPrototypeOf(jonh, solder);

/* ------- динамическая типизация ------------- */

// to String

// 1
console.log(typeof (String(null)));

// 2 конкатинація
console.log(typeof (5 + ''));

// to number

// 1
console.log(typeof (Number('4')));

// 2 унарний плюс
console.log(typeof (+'4'));

// 3
console.log(typeof (parseInt("15px", 10)));

// to boolean

// false 
// 0, '', null, undefined, NaN;
// true
// все інше

// 1
console.log(typeof (Boolean('4')));

// 2
console.log(typeof (!!'4'));

/* ------- Задачі ------------- */
// let y = 1;
// let x = y = 2;
// console.log(x);

// И запинается на лжи
console.log(2 && 1 && null && 0 && undefined);

//  ИЛИ запинаєтся на правде
console.log(null || 2 && 3 || 4);

console.log(+"Infinity");

/* ------- Робота з елементами сторінки ------------- */
//  document.querySelectorAll('.class');

const div = document.createElement('div'),
    otherDiv = "";

div.classList.add('class');

div.style.cssText = 'background-color: red;';

// міняємо один  елемент на інший
div.replaceWith(otherDiv);

// елементи subMenu візмуться тільки з батьківськогог Menu
const menu = document.querySelector('.menu'),
    subMenu = menu.querySelectorAll('li');


/* ------- Обробники подій ------------- */

const btn = document.getElementById("dsfg");

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.remove();
    alert('Second click');
});

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1){
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);

//  відміна стандартної повеедінки в браузері
const link = document.querySelector('a');

link.addEventListener('click', function(e){
    e.preventDefault();
     console.log(e.target);
});

// онаковий обробник на безліч елементів
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(el => {
    el.addEventListener('click', deleteElement, {once: true});
});

/* ------- Навігація по DOM ------------- */

// console.log(document.body.childNodes);

// console.log(document.body.firstChild);

// console.log(document.body.lastChild);

// get node
console.log(document.querySelector("#id").parentNode.parentNode);

console.log(document.querySelector('[data-id="atribute"]').previousSibling);

console.log(document.querySelector('[data-id="atribute"]').nextSibling);

// get element
console.log(document.querySelector("#id").parentElement);

for (let node of document.body.childNodes){
    if( node.nodeName == "#text"){
        continue;
    }
    console.log(node);
}

/* ------- События на мобильных устройствах ------------- */

// hammer.js

// touchstart
// touchmove
// touchend
// toucheenter
// toucheleave
// touchecancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('#box');

    box.addEventListener('touchestart', (e) => {
        e.preventDefault();

        // e.touches
        // e.targetTouches
        // e.changedTouches

        console.log('Start');
    });
});

/* -------------- параметри за замовчуванням --------------------*/

function fetchData (data, count = 0){
    console.log(`Отримали ${data} в кількості ${count}`);
}

fetchData('something', 42);