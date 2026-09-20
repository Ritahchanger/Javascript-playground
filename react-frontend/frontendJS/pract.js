const input = document.getElementById("todo-input");

const addButton = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list")


addButton.addEventListener("click",()=>{

 const task = input.value.trim()

 if(!task){
    alert("Kindly enter task....");
    return;
 }
 const listItem = document.createElement("li");

 listItem.textContent=task;


 const deleteBtn = document.createElement("button")

 deleteBtn.textContent = "X";

 deleteBtn.style.marginLeft="10px";

 deleteBtn.addEventListener("click",()=>{

    listItem.remove()

 })

 listItem.appendChild(deleteBtn);

 todoList.appendChild(listItem);

 input.value = "";


})


console.log(todoList)
