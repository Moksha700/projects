let tasks = [];
let completedTasks = [];

document.getElementById('new-task').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        text: taskText,
        id: Date.now(),
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
}

function renderTasks(filter = 'all') {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    let filteredTasks = tasks;

    if (filter === 'recent') {
        filteredTasks = tasks.slice().sort((a, b) => b.id - a.id);
    } else if (filter === 'completed') {
        filteredTasks = completedTasks.slice().sort((a, b) => b.id - a.id);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete" onclick="toggleComplete(${task.id})">✔</button>
                <button class="edit" onclick="editTask(${task.id})">✎</button>
                <button onclick="deleteTask(${task.id})">✖</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function toggleComplete(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    if (task.completed) {
        completedTasks.push(task);
    } else {
        completedTasks = completedTasks.filter(t => t.id !== id);
    }
    renderTasks();
}

function editTask(id) {
    const newTaskText = prompt("Edit your task:");
    if (newTaskText === null || newTaskText.trim() === '') return;

    const task = tasks.find(task => task.id === id);
    task.text = newTaskText.trim();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    completedTasks = completedTasks.filter(task => task.id !== id);
    renderTasks();
}

function filterTasks(filter) {
    renderTasks(filter);

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.filter-options button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    document.querySelector(`.filter-options button[onclick="filterTasks('${filter}')"]`).classList.add('active');
}

renderTasks();
