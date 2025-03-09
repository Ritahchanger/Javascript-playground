document.addEventListener("DOMContentLoaded",()=>{

    console.log("DOM fully loaded");

    const title = document.getElementById("title");

    const btn = document.getElementById("btn");

    const addBoxBtn = document.getElementById("add-box");

    const removeBoxBtn = document.getElementById("remove-box");

    const container = document.getElementById("container");

    const list = document.getElementById("list");


    btn.addEventListener("click",()=>{

        title.textContent = "DOM Manipulated";

        title.style.color = "blue";

        title.classList.toggle("highlight");

    });


    addBoxBtn.addEventListener("click",()=>{

        const newBox = document.createElement("div");

        newBox.classList.add("box");

        newBox.textContent = `BOX ${container.children.length + 1}`;

        container.appendChild(newBox)

    })


    removeBoxBtn.addEventListener("click",()=>{


        if(container.lastElementChild){

            container.removeChild(container.lastElementChild);

        }

    })


    list.addEventListener("click",(event)=>{

        if(event.target.tagName === "LI"){

            alert(`Clicked on: ${event.target.textContent}`);

        }

    })

    
    const observer = new MutationObserver((mutations)=>{

        mutations.forEach((mutation)=>{

            console.log("DOM changed: ",mutation)

        })


    })

    observer.observe(container,{childList:true});

})