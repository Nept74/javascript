'use strict';
let taskSection = document.getElementById("tasks");
let tasks = localStorage.getItem('tasks');
if (!tasks) {
    taskSection.innerText = 'no books?';
} else {
    tasks = JSON.parse(tasks);
    for (let task of tasks) {
        let div = document.createElement('div');
        let head = document.createElement('h2');
        head.innerHTML = task.task;
        let paragraph = document.createElement('p');
        paragraph.innerHTML = task.description;
        let time = document.createElement('span');
        time.innerHTML = task.time;
        console.log(head, paragraph, time);
        taskSection.append(div);
        div.append(head);
        div.append(paragraph);
        div.append(time);
    }
}
let taskList = document.getElementById('tasks');
taskList.addEventListener("click", pickTask);

function pickTask(event) {
    console.log(event);
    let chooseTask = event.target;
    console.log(chooseTask);
    let color = chooseTask.parentElement;

    let div = document.querySelectorAll('div');
    let array = Array.from(div);
    if (array.includes(chooseTask)) {
        if (chooseTask.style.backgroundColor !== 'red') {
            chooseTask.style.backgroundColor = 'red'
        } else {
            chooseTask.style.backgroundColor = 'bisque'
        }

    }
    if (array.includes(color)) {
        if (color.style.backgroundColor !== 'red') {
            color.style.backgroundColor = 'red'
        } else {
            color.style.backgroundColor = 'bisque'
        }
    }
}