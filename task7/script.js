'use strict'

// task1
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

// function priceFilter(obj, from, to){
//     function filter(obj, from, to) {
//         for (let goods in obj) {
//             if (obj[goods].price > from && obj[goods].price <= to) true
//             else false
//         }
//         return obj.filter(function (filter))
//     }
// }

// function objBuilder(obj, from, to){
//         let sum = Math.floor(Math.random() * (to - from)) + from;
//         obj = {
//             price: sum
//         }
//         return obj
// }
// console.log(objBuilder('book',20,40))

// task2
items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function search(item, itemTitle, countToCart){
    for (let goods in item){
        let check ;
        console.log(item[goods].title)
        if (item[goods].title === itemTitle){
            if (item[goods].count >= countToCart){
                item[goods].count = item[goods].count - countToCart
                console.log(`осталось товара: ` + item[goods].count)
                check = true;
                return true
            }else{
                console.log('Товара не хватает')
                check = true;
                return false
            }
        }
    if (check !== true){
        return false
    }
    }
}
console.log(search(items, 'Арфаf', 20))


// task3

let books = [
    {author: "Толстой", title: "Война и мир"},
    {author: "Пушкин", title: "Пир во время чумы"},
    {author: "Лермонтов", title: "Тамань"},
    {author: "Гончаров", title: "Обломов"},
    {author: "Лермонтов", title: "Герой нашего времени"},
    {author: "Пушкин", title: "Руслан и Людмила"},
    {author: "Лермонтов", title: "И скучно, и грустно"},
];

function compare(a,b){
    if (a.title > b.title) return 1;
    if (a.title === b.title) return 0;
    if (a.title < b.title) return -1;
}

books.sort(compare)
console.log(books);
