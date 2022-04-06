'use strict'

let count = prompt('введите количество товара');

if (count.endsWith('11') || count.endsWith('12') || count.endsWith('13') ||
    count.endsWith('14')) {
    console.log(`${count} товаров`);
} else if (count.endsWith('1')) {
    console.log(`${count} товар`);
} else if (count.endsWith('2') || count.endsWith('3') || count.endsWith('4')) {
    console.log(`${count} товара`);
} else if (count.endsWith('5') || count.endsWith('6') || count.endsWith('7') ||
    count.endsWith('8') || count.endsWith('9') || count.endsWith('0')) {
    console.log(`${count} товаров`);
}