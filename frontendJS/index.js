const title = document.getElementById('main-title');

const button = document.querySelector(".btn");

title.textContent="WELCOME TO JS COURSE"

title.innerHTML=`<span style="color:red;">Hello sir</span>`

button.style.backgroundColor = "green"

button.style.padding = "10px"

const toggleButton = document.getElementById("toggle-btn");

const text = document.getElementById("text");

console.log(title,button)




const newItem = document.createElement("li")


toggleButton.addEventListener("click",()=>{

    text.classList.toggle("highlight");

})

const inputBox = document.getElementById("input-box");

const output = document.getElementById("output");



inputBox.addEventListener("input",(e)=>{

    output.textContent = e.target.value;

})



const list = document.getElementById("list");

const firstItem = list.firstElementChild;

const lastItem = list.lastElementChild;

const parent = firstItem.parentElement;

const next = firstItem.nextElementSibling;

console.log(firstItem,lastItem,parent,next)