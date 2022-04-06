'use strict'

const MIN = 1900, MAX = 2022;
let year = 2020;
// логические операторы вощвращают значения типа булеан
// оператор "и" && операнд1 && операнд2 (если оба тру - вернет тру, в ином случае фолс)
// если операнд1 фолс - второй не проверяется, а сразу возвращается фолс

let result = MAX > year && MIN < year ? 'данные верны' :
    `год должен быть в диапазоне от ${MIN} до ${MAX}`;
console.log(result);

// оператор ИЛИ ||    операнд1 || операнд2  (тру если хотя бы 1 тру)

let catWaight = 3, catAge = 2;

result = catAge <=0 || catWaight <= 0 ? 'возраст и вес должны быть больше 0' :
    'данные введены верно';
console.log(result);

// оператор "не" !  !операнд
// 1 преобразует операнд к типу булеан
// 2 изменит полученное значение на противоположное

// при преобразовании к тибу булеан в фолс преобразуются:
// "", 0, -0, null, undefined, NaN
// все остальное - тру

let itemsCount = 2;
result = !itemsCount ? `Товара нет в наличии` :
    `Количество товара ${itemsCount}.`;

console.log(result);

let userAgeInput = prompt('Введите возраст', '0');
console.log(userAgeInput);

let userAge = parseInt(userAgeInput);
console.log(userAge);

// считывает из строки число с плавающей точкой, либо NaN
// parseFloat()

const MIN_AGE = 7;
const MAX_AGE = 17;

if (userAge < MIN_AGE || userAge > MAX_AGE) {
    result = "Поездка недоступна для указаного возраста";
} else if (userAge === 15 || userAge === 16) {
    result = 'Ребенок может стать вожатым';
} else {
    result = 'поездка доступна';
}
console.log(result)

let lang = 'javascript';
let exp = 7;
let german = true;

if (lang === 'javascript') {
    console.log('Приглашаем вас на собеседование');
    if (exp > 5) {
        console.log('Прибавка к указанной зп 5%');
    }
    if (german) {
        console.log('Компания оплатит проживание');
    }
} else {
    console.log('Мы вам перезвоним');
}


// switch
// let ticketNum = prompt('введите номер билета');
//
// switch (ticketNum){
//     case '111111':
//        alert('Приз - дом');
//         break;
//     case '222222':
//     case '333333':
//         alert('приз - земельный участок');
//         break;
//     case '444444':
//     case '555555':
//     case '666666':
//         alert('meow');
//         break;
//     default:
//         alert('так получилось не фартануло');
// }


let month = 6;
// в зависимости от номера месяца вывести время года
// 12-2 зима 3-5 весна 6-8 лето 10-12


switch (month){
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('придумайте название для нового времени года');
}