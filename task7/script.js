'use strict'

// task1

function objBuilder(obj, from, to){
        let sum = Math.floor(Math.random() * (to - from)) + from;
        obj = {
            price: sum
        }
        return obj
}
console.log(objBuilder('book',20,40))

// // task2
// let items = {
//     piano: {
//         title: "Пианино",
//         price: 3000,
//         count: 25
//     },
//     guitar: {
//         title: "Гитара",
//         price: 1200,
//         count: 40
//     },
//     drum: {
//         title: "Барабаны",
//         price: 2700,
//         count: 12
//     },
//     flute: {
//         title: "Флейта",
//         price: 900,
//         count: 50
//     },
//     harp: {
//         title: "Арфа",
//         price: 3400,
//         count: 5
//     }
// };
// console.log(items.piano.count)
//
// function search(item, itemTitle, countToCart){
//     for (let goods in item){
//         console.log(goods)
//         if (goods === itemTitle){
//             if (count <= countToCart){
//                 count = count - countToCart
//                 return true;
//             }else{
//                 return `Товара не хватает` +
//                     false;
//             }
//         } else {
//             return 'Данного товара нет' +
//                 false;
//         }
//     }
// }
// console.log(search(items, 'Арфа', 2))
//
//
// // task3
//
// let books = [
//     {author: "Толстой", title: "Война и мир"},
//     {author: "Пушкин", title: "Пир во время чумы"},
//     {author: "Лермонтов", title: "Тамань"},
//     {author: "Гончаров", title: "Обломов"},
//     {author: "Лермонтов", title: "Герой нашего времени"},
//     {author: "Пушкин", title: "Руслан и Людмила"},
//     {author: "Лермонтов", title: "И скучно, и грустно"},
// ];
//
// function sortBooks(array, value){
//     let first = 0;
//     for (let elem of array){
//         if (elem.value > 0){
//
//         }
//     }
//     if (a.length === b.length) return 0;
//     if (a.length > b.length) return 1;
//     return -1;
// }