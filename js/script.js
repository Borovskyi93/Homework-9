/*------------------------------------------------1----------------------------------------------*/
console.log('*------------------------------------------------1----------------------------------------------*');

let stringResultNumbers = '';

for (let amountNumbers = 20; amountNumbers <= 30; amountNumbers += 0.5) {
    stringResultNumbers += amountNumbers + ' ';
}

console.log(stringResultNumbers);

/*------------------------------------------------2----------------------------------------------*/
console.log('*------------------------------------------------2----------------------------------------------*');

const dollarExchRate = 27;

for (let amountOfDollars = 10; amountOfDollars <= 100; amountOfDollars += 10) {
    console.log(`${amountOfDollars} долларів на сьогодні дорівнює: ${amountOfDollars * dollarExchRate} гривень`);
}

/*------------------------------------------------3----------------------------------------------*/
console.log('*------------------------------------------------3----------------------------------------------*');

const intNumberFromUser = +prompt('Введіть ціле число (завдання №3)');

for (let countNumbers = 1; countNumbers ** 2 < intNumberFromUser; countNumbers++) {
     console.log(countNumbers);
 }

/*------------------------------------------------4----------------------------------------------*/
console.log('*------------------------------------------------4----------------------------------------------*');

const simpleNumberFromUser = +prompt('Введіть число (завдання №4)');


if (simpleNumberFromUser) {
    let sumSimpleDevideNumbers = 0;
    for (let countOfDevides = 1; countOfDevides <= simpleNumberFromUser; countOfDevides++) {
        if (simpleNumberFromUser % countOfDevides !== 0) {
            continue;
        } else {
            sumSimpleDevideNumbers += countOfDevides;
        }
    }
    if (sumSimpleDevideNumbers <= (simpleNumberFromUser + 1)) {
        console.log('Число є простим!');
    } else {
        console.log('Число не є простим!');
    }
} else {
    console.log('Щось пішло не так!');
}

/*------------------------------------------------5----------------------------------------------*/
console.log('*------------------------------------------------5----------------------------------------------*');

const randomNumberFromUser = +prompt('Введіть число (завдання №5):');
const numberForExpo = 3;

if (randomNumberFromUser) {
    let resultForExpo = 1;
    for(let countNumber = 1; resultForExpo < randomNumberFromUser; countNumber++) {
        resultForExpo = numberForExpo ** countNumber;
    }
    if (resultForExpo === randomNumberFromUser) {
        console.log('Успіх! Число підходить.')
    } else {
        console.log('Спробуйте ще раз! Число не підходить.')
    }
}  else {
    console.log('Щось пішло не так!');
}
