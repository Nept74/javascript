'use strict'

function addTask(event){
    event.preventDefault();

    let task = this.elements.task.value;
    let description = this.elements.description.value;

    let time = this.elements.time.value;

    let taskInfo = {task,description,time};
    let tasks = localStorage.getItem('tasks');
    console.log(tasks)
    console.log(taskInfo)
    if (tasks) tasks = JSON.parse(tasks);
    else tasks = []

    tasks.push(taskInfo);

    console.log(JSON.stringify(tasks));
    console.log(tasks.length);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    let success = document.getElementById('task-success');
    success.style.display = 'block';
}
document.forms['add-task-form'].addEventListener('submit',addTask)

