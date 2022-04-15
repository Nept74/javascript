'use strict'
// task 0
let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];


let booksSection = document.querySelector('.book-section');
// Object.values(goods) - массив значений объекта goods
for (let genre of booksByGenre) {
    let div = document.createElement('div');
    div.classList.add('genre');

    let h2 = document.createElement('h2');
    h2.innerHTML = genre.genreName;

    let divBook = document.createElement('div');
    divBook.classList.add('books');

    for (let books of genre.books){
        let article = document.createElement('article');
        article.innerHTML =
            `<span>${books.title}</span>
        <img alt="" src=${books.img}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto dolorem praesentium! Aut neque nulla officia? Beatae, iure provident?</p>`
        divBook.append(article);
    }
    div.append(h2, divBook);
    booksSection.append(div);
}

// task 1

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];

function generateTable(...array) {
    let tableSection = document.querySelector('.table-section');
    let table = document.createElement('table');
    table.classList.add('table');
    for (let arrayItems of array) {
        console.log(Object.keys(arrayItems[0]).length)
        let i = 0;
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')
            for (let elem of arrayItems) {
                let size = Object.keys(elem).length
                console.log(size)
                let keys = Object.keys(elem);
                console.log(keys[i])

                let row = document.createElement('tr')

                if (i < size) {
                    let th = document.createElement('th');
                    th.innerText = keys[i];
                    th.classList.add('head')
                    console.log(th)
                    i++
                    thead.append(th);
                }

                for (let j = 0; j < size; j++) {
                    let values = Object.values(elem);
                    console.log(values[j])

                    let td = document.createElement('td');
                    td.innerText = values[j];
                    td.classList.add('body');
                    console.log(td);

                    row.append(td)
                    tbody.append(row);
                    table.append(tbody);
                    table.prepend(thead);
            }
            tableSection.append(table);
        }
    }
}
console.log(generateTable(articles))