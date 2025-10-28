import TaskList from './task-list.js';
const taskList = new TaskList();
const container = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('new-task-input');
taskList.renderTasks(container);
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }
    taskList.addTask(taskText);
    const renderedElements = taskList.renderTasks(container);
    console.log('Rendered DOM elements:', renderedElements);
    newTaskInput.value = '';
});
