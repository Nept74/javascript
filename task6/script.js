'use strict'

// task1
let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
function sortNums(a, b){
    if (a.length === b.length) return 0;
    if (a.length > b.length) return 1;
    return -1;
}
numbers.sort(sortNums);
console.log(numbers);

// task2

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];

function sortPresents(a, b){
    if (Math.random(a) === Math.random(b)) return 0;
    if (Math.random(a) > Math.random(b)) return 1;
    return -1;
}
presents.sort(sortPresents);
console.log(presents);

// task3

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
function repeatCheck([...arr1], [...arr2]) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(repeatCheck(first,second));

// task4

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

