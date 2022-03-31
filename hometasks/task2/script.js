'use strict'

// task 1
let count = 59;
if (count >= 100 && count <= 90) {
    console.log('не подкручивайте баллы')
}else if (count <= 100 && count >= 90) {
    console.log(`${count} баллов - оценка отлично`);
}else if (count >= 60) {
    console.log(`${count} баллов - оценка хорошо`);
}else if (count >= 40) {
    console.log(`${count} баллов - оценка удовлетворительно`);
}else {
    console.log(`${count} баллов - попробуйте еще раз`);
}


// task 2

let sum = 1000;
let code = 6029;

switch (code){
    case 4653:
        sum = sum * 0.70;
        console.log(`скидка 30%, к оплате ${sum}`);
        break;
    case 5698:
    case 5111:
        sum = sum * 0.80;
        console.log(`скидка 20%, к оплате ${sum}`);
        break;
    case 6922:
    case 6113:
    case 6099:
        sum = sum * 0.90;
        console.log(`скидка 10%, к оплате ${sum}`);
        break;
    default:
         console.log(`без скидки, к оплате ${sum}`);
}

// task 3

let plate = 10;
let cleaner = 7;

while (plate !== 0 && cleaner !== 0) {
    plate = plate - 1;
    cleaner = cleaner - 0.5;
    if (plate === 0 || cleaner === 0) {
        console.log(`осталось ${plate} тарелок и ${cleaner} средства`)
    } else {
        console.log('моем')
    }
}

// task 4

let input = 1;
let num_task4 = parseInt(input);

let random_num = Math.ceil(Math.random()*9);

while (num_task4 !== 0){

    let input = prompt('угадайте цифру (1-9)');
    let num_task4 = parseInt(input);
    if (num_task4 === random_num) {
        console.log('вы угадали');
        break;
    }
    if (num_task4 > random_num) {
        console.log('загаданное число меньше');
    } else if (num_task4 < random_num) {
        console.log('загаданное число больше');
    }
}

// task 5

let num = Math.ceil(Math.random()*490 + 10);

if (num >= 25 && num <= 200){
    console.log(`число ${num} содержится в интервале (25;200)`)
} else {
    console.log(`число ${num} не содержится в интервале (25;200)`)
}

// task 6 не доделано

let userInput = prompt('введите число от 1 до 100');
let num_task6 = parseInt(userInput);
let random = 0;

while (random !== num_task6) {
    let question = prompt('введенное число больше 50?');
    if (question === 'да') {
        question = prompt('введенное число больше 75?');
        if (question === 'да') {
            question = 'нет';
            while (question !== 'да') {
                random = Math.ceil(Math.random() * 25 + 75);
                question = prompt(`введенное число это ${random}?`)
            }
        } else {
            question = 'нет';
            while (question !== 'да') {
                random = Math.ceil(Math.random() * 25 + 50);
                question = prompt(`введенное число это ${random}?`)
            }
        }
    } else {
        question = prompt('введенное число больше 25?');
        if (question === 'да') {
            question = 'нет';
            while (question !== 'да') {
                random = Math.ceil(Math.random() * 25 + 25);
                question = prompt(`введенное число это ${random}?`)
            }
        } else {
            while (question !== 'да') {
                random = Math.ceil(Math.random() * 25);
                question = prompt(`введенное число это ${random}?`)
            }
        }
    }
}
console.log('скайнет победил');