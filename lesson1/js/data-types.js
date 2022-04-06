'use strict'; //
// комментарий на всю строку (ctrl +/ )
/*
    многостроный комментарий
    ага ( ctrl + / + shift)
 */

// Javascript (спецификация ECMAScript)
// инструкции выполняются последовательно,
// в конце инструкции ставим ;

// Типы данных:
/*
* 1. примитивные типы
*   1.1 числа (положительные, отриц, 0, число с плавающей точкой)
*   1.2 строки "meow" 'meow' `meow`
*   1.3 логический тип (булеан) (true/false)
*   1.4 null
*   1.5 undefined
*   1.6 bigInt 12456723423527346n (большое число)
* 2. ссылочные типы
* */

// переменные
/* объявление переменных let / const / var
* let - можно переприсвоить
* const - константа
* */
let variableName;
// переменной присвоили значение Данные
variableName = 'Данные';
console.log(variableName);
/* = это оператор присваивания */
let age = 74;
console.log(age)

let login = 'qwerty',
    password = 'qwerty123';

let isActive, closed = true;

age = 27;
console.log(age)
age = 'тридцать пять'
console.log(age)


// константам значение присваеватся при объявлении
// значение константы изменить нельзя
const MONDAY_RU = 'Понедельник';
const YELLOW = '#ffff00'

age = 25;
let age2 = 19;
const averageAge = (age + age2) / 2;
console.log('средний возраст', averageAge)
/* значение константы известно - ВЕРХНИЙ_РЕГИСТР
*  значение константы до загрузки страницы неизвестен - camelCase*/
console.info('информация');
console.warn('Казахстан угрожает нам бомбардировкой');
console.error('Здебсь обшибка, исправбте');

// кроме обычных чисел существуют специальные числовые значения
// 1. Infinity
// 2. -Infinity
// 3. NaN - Not a Number - ошибка вычеслений
console.log(age / 0);
console.log(-age / 0);
console.log(isFinite(-age / 0));
console.log(isFinite(age));
console.log('Возраст'/ age);
console.log(isNaN('Возраст'/ age))

// строки
// "" и '' одинаковые

// обратные ковычки `` ${имена переменных/ выражения которые должны быть вычеслены}
let loginInfo = `Логин пользователя: ${login}. 2 + 3 = ${2 + 3}`;
console.log(loginInfo);

let greeting = 'Добро пожаловать в \'Магазин\'';
console.log(greeting);

let undeginedValue;
console.log(undeginedValue);

// s = 2 * (a*b + a*c + b*c)

let a = 2, b = 3, c = 4;
let s = 2 * (a*b + a*c + b*c);
console.log(s)

let sInfo = `Площадь равна: ${2 * (a*b + a*c + b*c)}`;

console.log(9 % 8);
console.log(99 % 10);
console.log(8 % 2);

// операторы сравнения
// > < >= <=
// == равенство
// != неравенство
// === строгое равенство
// !== строгое неравенство
const MIN = 10;
const MAX = 20;
let len = 12;
console.log (MIN > len);
console.log (MIN <= len);
console.log (MIN <= 10);

let first = '1200';
let second = 1200;
console.log(first == second);
console.log(first === second);

// тернарный оператор ? :
// true - первое значение после ?
// false - значение после :
let loginLen = 4;
let result = loginLen <= MIN ? 'Ошибка ввода' : 'Логин введен верно';
console.log(result);