'use strict';
// ссылочные типы (объекты)
// у объектов могут быть свойства и метода

// набор свойств и методов зависит от типа объекта

// массив - люъект типа Array
// предназначены для работы с упорядоченым набором элементов

// объявление массива
let numbers = new Array(); // пустой массив
numbers = new Array(3); // первоначальная длина массива
console.log(numbers);

let ints = []; // пустой массив
ints = [5, 10, -7]; //массив в 3 элемента
console.log(ints);

// длина массива - последний индекс +1
console.log(ints.length);

// разряженный массив
ints = [4, 5, , -10, , , 66, , 7];
console.log(ints);
console.log(ints.length);

let colors = ['blue', 'red', 'yellow', 'pink'];

// доступ к элементам массива осуществляется через []
console.log(colors[1]);
colors[0] = 'black';

// обращение к несуществующему элементу массива
console.log(colors[100]); // undefined
colors[100] = 90; //101
console.log(colors);

ints = [3, 6, 9];
// многомерный массив

ints = [[1,2,3], [-4,5,6], [7,-8]];
console.log(ints[2].length);
console.log(ints[1][1]);
console.log(ints[2][3]);

numbers = [5, 7, -12, -90, 11, -56];
// вывести все положительные числа в консоль
// for of не позволяет изменять значения элементов массива
for (let element of numbers) {
    if (element > 0) {
        console.log(element);
    }
}
// каждый элемент массива умножить на 2
for (let i = 0; i < numbers.length; i++){
    numbers[i] *= 2;
}
console.log(numbers);

colors = ['blue', 'red', 'yellow','black', 'pink', 'brown'];
let letter = 'B';


let bColors = [];
for (let color of colors) {
    if (color.startsWith(letter.toLowerCase())) {
        bColors.push(color);
    }
}
console.log(bColors);
let sum = 0;
for (let arr of ints){
    for (let num of arr){
        sum += num;
    }
}
console.log(sum)


ints = [[2,3,5], [-9,25,3], [7,-13]];

sum = 0;
for (let i = 0; i < ints.length; i++){
    for (let j = 0; j < ints[i].length; j++){
        sum+= ints[i][j];
    }
}
console.log(sum)

colors = ['blue', 'red', 'yellow','black', 'pink', 'brown'];
letter ='B';
for (let i = colors.length - 1; i >= 0; i--){
    if (!colors[i].startsWith(letter.toLowerCase())) {
        colors.splice(i, 1);
    }
}
console.log(colors);


colors = ['blue', 'red', 'yellow','black', 'pink', 'brown'];
// удаляет и возвращает последний элемент массива
let lastElem = colors.pop();
// удаляет и возвращает первый элемент массива
let firstElem = colors.shift();
// добавляет один или несколько элементов в начало массива
colors.unshift('purple', 'orange');

// splice (индекс, количество, элементы для добавления)
colors.splice(1,2,'greenyellow', 'silver');