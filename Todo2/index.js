// Select the form, input, and the list
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let isEditMode = false;
let currentTodoIndex = null;

window.onload = () => {
  todos.forEach((todo, index) => {
    addTask(todo.text, todo.completed, index);
  });
};


todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText !== "") {
    if (isEditMode) {
      todos[currentTodoIndex].text = taskText;
      isEditMode = false;
      currentTodoIndex = null;
      todoInput.value = "";
      saveTodos();
      renderTodos();
    } else {
      todos.push({ text: taskText, completed: false });
      saveTodos();
      addTask(taskText, false, todos.length - 1);
      todoInput.value = ""; // Clear input field
    }
  }
});

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a task to the list
function addTask(taskText, completed, index) {
  const li = document.createElement("li");

  if (completed) {
    li.classList.add("completed");
  }

  li.textContent = taskText;

  // Create the complete button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.style.backgroundColor = "#28a745";
  completeButton.addEventListener("click", () => {
    todos[index].completed = !todos[index].completed;
    li.classList.toggle("completed");
    saveTodos();
  });

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.backgroundColor = "#ffc107";
  editButton.addEventListener("click", () => {
    todoInput.value = taskText;
    isEditMode = true;
    currentTodoIndex = index;
  });

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    todos.splice(index, 1); // Remove the task from the list
    saveTodos();
    renderTodos(); // Re-render the list after deletion
  });

  // Append buttons to the list item
  li.appendChild(completeButton);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  // Append list item to the todo list
  todoList.appendChild(li);
}

// Function to re-render the task list after update
function renderTodos() {
  todoList.innerHTML = ""; // Clear the list
  todos.forEach((todo, index) => {
    addTask(todo.text, todo.completed, index);
  });
}
