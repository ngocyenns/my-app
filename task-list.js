import TaskItem from './task-item.js';
export default class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(taskText) {
        const task = new TaskItem(taskText);
        this.tasks.push(task);
    }
    renderTasks(container) {
        container.innerHTML = '';
        const taskElements = this.tasks.map(task => task.render());
        taskElements.forEach(element => container.appendChild(element));
        return taskElements;
    }
}
