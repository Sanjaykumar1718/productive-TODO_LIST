// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task to the list
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    // Delete task functionality
    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskItem.remove();
    });
});
