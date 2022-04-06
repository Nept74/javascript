// task 1
let sum = 120000
let result = sum > 100000 ? sum * 0.90: sum;
console.log(result);

// task 2
let num = 87;
let secondDigit = num % 10;
let firstDigit = (num - secondDigit) / 10;

let sum1 = secondDigit + firstDigit;

console.log( sum1 );

// task 3

let length = 7;
let width = 10;
let height = 5;
let area = 2*(length*width + length*height + height*width);
console.log(area)

//task 4

let a = 10;
let b = 6;

a = a - b;
b = a + b;
a = -a + b;
console.log(a,b)