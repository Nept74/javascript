'use strict'

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n, prises) {
    if (n < 3) return;
    let table = document.createElement('table');
    for (let i = 0; i < n; i++){
        let Row = table.insertRow();
        for (let j = 0; j < n; j++){
            let cell = Row.insertCell();
        }
    }
    document.body.append(table);
    let cells = document.querySelectorAll("td");
    for (let prise in prises){
        let randomCell = Math.floor(Math.random() * cells.length);
        cells[randomCell].innerText = prises[prise];
    }


    // генерация поля n x n
    // добавление поля в html

    // let cells = получить все ячейки
    // let randomcells = cells[рандомный индекс] - три раза
    // randomCell - добавить атрибут

}
generateField(4, prises)