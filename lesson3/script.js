'use strict'

// строки
// примитивный тип
// "", '' или ``
// строки хранятся в кодировке utf-16 в виде массива символов
// строки в JS неизменны, можно лишь создать новую строку на основе существующей

// конкатенация строк
let name = 'Глеб', surname = 'Петров';
let fullName = name + "" + surname;
// если один из операндов является строкой,
// то второй операнд будет преобразован в строку,
// потом осуществляется конкатенация строк
console.log(fullName);
// кроме + остальные операторы приводят к числам
// если один из операндов не число - будет NaN

// методы строк
let string = 'Поезд';

// у строк как у примитивов методов нет, но при создании объекта он появляется
string = string.toLowerCase();
console.log(string);

string = string.toUpperCase();
console.log(string);

string = 'javascript       ';
console.log(string.length);
string = string.trim()
console.log(string.length);

// includes / startsWith / endsWith
console.log(string.includes('ava')); // true
console.log(string.startsWith('Ja')); // false
console.log(string.endsWith('script')); // true

console.log(string[0]); //j
console.log(string[4]); //s

// indexOf - lastIndexOf
// индекс первого вхождения последовательности в строку
// или -1, если символ не найден
string = 'javascript';
let letter = 'a';
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
        count += 1;
    }
}
console.log(count);

// замена
let date = '12-04-2021';
date = date.replace('-', '.');
console.log(date);
// меняет только первый

date = date.replaceAll('-','.');
console.log(date);

// сравнение строк
let str1 = 'html';
let str2 = 'Html';

console.log(str1 === str2); // false
console.log(str1 !== str2); // true

let compareRes = str1.localeCompare(str2);
console.log(compareRes); //-1
// 0 - строки равны (по умолчанию регистр ВажеН)
// отрицательное число - если str1 меньше str2
// положительное число - если str1 больше str2

compareRes = str1.localeCompare(str2, undefined,
    {sensitivity:'accent'});
console.log(compareRes);


string = 'javascript';
string = string.substring(2,5);
console.log(string); // vas

while (true){
    let string1 = prompt('введите строку');
    if (string1 === '0' || string1 === null) {
        break;
    } else {
        let upper = string1[0]
        upper = upper.toUpperCase();
        string1 = string1.toLowerCase();
        string1 = string1.replace(string1[0], upper);
        console.log(string1);
    }
}

// let min = 4;
// let max = 10;
//
// let input = prompt('введите строку');
// if (input.length > min && input.length < max) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// Дана переменная count
// в зависимости от значения переменной вывести в консоль
// слово товар в правильной форме
// например 12 товаров 33 товара 21 товар и тд












