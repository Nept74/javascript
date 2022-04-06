'use strict';

// task 1

let numbers = [2, -3, 4, -5, -6, 7];
let negativeNumber = [];
for (let num of numbers){
    if (num < 0) {
        console.log(num);
        negativeNumber.push(num);
    }
}
console.log(negativeNumber);

// task 2

let arr = [];
arr.length = 7;
let a = 0


for (let i = 0; i < arr.length; i++){
    a = (Math.floor(Math.random() * 295 + 5));
    arr[i] = a;
}
console.log(arr);
let max = 0;
let min = 300;
let maxIndex = 0,
    minIndex = 0;

for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i];
        maxIndex = i;
    }
    if (min > arr [i]) {
        min = arr[i];
        minIndex = i;
    }
}
[arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]]
console.log(max, min);
console.log(arr);

// task 3

let array = [];
while (true){
    let newLine = prompt('введите что-нибудь');
    if (newLine == 0){
        break;
    } else if (array.indexOf(newLine) !== -1){
        console.log('Повтор');
    } else {
        array.push(newLine);
        console.log(array);
    }

}
console.log(array);

