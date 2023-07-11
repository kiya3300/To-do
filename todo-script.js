const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create a new task
function createTask(taskText) {
  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `
    <div class="task-text">${taskText}</div>
    <div class="action-buttons">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
  `;
  todoList.appendChild(li);
}

// Function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    todoInput.value = '';
  }
}

// Function to handle task deletion
function handleTaskDeletion(event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.parentElement.remove();
  }
}

// Function to handle task editing
function handleTaskEditing(event) {
  if (event.target.classList.contains('edit-button')) {
    const taskTextElement = event.target.parentElement.previousElementSibling;
    const taskText = taskTextElement.textContent;
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskTextElement.textContent = newTaskText;
    }
  }
}

// Event listeners
todoForm.addEventListener('submit', handleFormSubmit);
todoList.addEventListener('click', handleTaskDeletion);
todoList.addEventListener('click', handleTaskEditing);
