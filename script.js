let money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timesData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

console.log(appData.budget);

let costs,
    howMarch;

costs = prompt("Введите обязательную статью расходов в этом месяце");
howMarch = +prompt("Во сколько обойдется?");
appData.expenses[costs] = howMarch;

costs = prompt("Введите обязательную статью расходов в этом месяце");
howMarch = +prompt("Во сколько обойдется?");
appData.expenses[costs] = howMarch;

console.log(appData.expenses);

alert("Ваш бюджет на месяц = " + appData.budget / 30);