const readline = require('readline-sync');

function absValue(num){
    return Math.abs(num);
}

function toThePower(num, exp){
    return Math.pow(num, exp);
}

function squareRoot(num){
    return Math.sqrt(num);
}
function minMax(num1, num2, num3){
    return{
        max: Math.max(num1, num2, num3),
        min: Math.min(num1, num2, num3),
    };
}

function generateNumber(first, last){
    return Math.floor(Math.random() * (last - first) + first);
}

function customRounding(num, dec){
    let multiply = num * dec
    let rounded = Math.round(multiply);
    return rounded / dec
}

console.log(`Welcome to calculator!\nWhat do you need?\n1. Absolute Value\n2. Number to Power!\n3. Square Root\n4. Max and Min Finder\n5. Random Number Generator\n6. Decimal Rounding`)

let operation = readline.question("Choose A Number:\n")

if (operation == 1){
    let inputAbsValue = readline.question("Please Enter a Number.\n")
    console.log(absValue(inputAbsValue));
}

if (operation == 2){
    let numPower = readline.question("Please Enter a number.\n");
    let expPower = readline.question("Please Enter an Exponent.\n");
    console.log(toThePower(numPower, expPower));
}

if (operation == 3){
    let inputSqrt = readline.question("Please Enter a Number.\n");
    let num = squareRoot(inputSqrt);
    console.log(`The Square Root of ${inputSqrt} is approximately ${num}.`);
}

if (operation == 4){
    let minMaxInput = readline.question("Please Enter a Number.\n");
    let minMax2 = readline.question("Please Enter Another Number.\n");
    let minMax3 = readline.question("Please Enter One More Number.\n");
    let finalMinMax = minMax(minMaxInput, minMax2, minMax3)
    console.log(finalMinMax);
}

if (operation == 5) {
    let number1 = readline.question("Pick the Starting Number.\n");
    let number2 = readline.question("Pick the Ending Number.\n");
      console.log(generateNumber(number1, number2));
}

if (operation == 6) {
    let question1 = readline.question("Choose a Number.\n");
    let question2 = readline.question("Choose what place you want to. i.e. 10, 100, 1000\n");
    console.log(customRounding(question1, question2));
}