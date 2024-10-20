// Select the form, input, and the list
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();


  const newTask = todoInput.value.trim();

  if (newTask !== "") {
    addTask(newTask);
    todoInput.value = ""; 
  }
});

function addTask(task) {
 
  const li = document.createElement("li");
  li.textContent = task;

 
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.style.backgroundColor = "#28a745";
  completeButton.style.marginRight = "10px";
  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed"); // Toggle the completed class
  });

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    li.remove(); // Remove the task
  });

  // Append the buttons to the list item
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // Append the list item to the task list
  todoList.appendChild(li);
}
