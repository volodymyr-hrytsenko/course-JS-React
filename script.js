let money,
    time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget : money,
    timesData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("all right");
            appData.expenses[a] = b;
        } else {
            --i;
        }
        
    }
}
// chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш щоденний бюджет = " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay <= 100) {
        console.log("Мінімальний дохід");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Середній дохід");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Високий дохід");
    } else {
        console.log("Сталася помилка");
    }
}
// detectLevel();

function chooseOptExpenses () {
    for (let i = 1; i <= 3; i++) {
        let answer = prompt("Статья необязательных расходов?");
        
        if ( (typeof(answer)) === "string" && (typeof(answer)) != null &&
            answer != '' && answer.length < 50) {
            appData.optionalExpenses[i] = answer;
        } else {
            --i;
        }
    }
}
// chooseOptExpenses();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Яка сума збережень?"),
            percent = +prompt("Під який відсоток?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Дохід в місяць з вашого депозиту: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);