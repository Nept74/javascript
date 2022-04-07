'use strict'

// task 1

function range (start, end, step = 1){
    let rangeArray = [];
    if (start < end && step > 0) {
        for (let i = start; i <= end; i = i + step){
            console.log(i);
            rangeArray.push(i);
        }
        return rangeArray;
    } else if (start > end && step < 0) {
        for (let i = start; i >= end; i = i + step){
            console.log(i);
            rangeArray.push(i);
        }
        return rangeArray;
    } else {
        return 'Данные введены некорректно'
    }
}
console.log(range(9,14,-2));

// task 2

function checkSpam (text, ...spamWords){
    let array = text.split([' ']);
    console.log(array);
    console.log(spamWords);
    let c = 0;
    for (let i = 0, b = spamWords[0]; i < array.length; i++){
        b = spamWords[0];
        console.log('обнуляем');
        for (let num = 0; num < spamWords.length; num++){
            if (array[i] === spamWords[num]) c++
        }
    }
    if (c === 0){
        return 'оценка5'
    } else if (c > 0 && c < 2){
        return 'оценка 4'
    } else if (c > 2 && c < 4){
        return 'оценка 3'
    } else if (c > 4 && c < 6){
        return 'оценка 2'
    } else if (c > 6 && c < 8){
        return 'оценка 1'
    }
}

console.log(checkSpam('привет привет привет меня зовут бла бла цукк', 'привет', 'бла'))