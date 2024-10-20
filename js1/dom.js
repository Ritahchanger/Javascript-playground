// const customParagraphs = document.querySelectorAll('.custom-p')

// console.log(customParagraphs)

// customParagraphs.forEach(

//     function(p){

//         p.style.background="black";

//         p.style.color="#ffffff"

//         p.style.padding="15px"

//     }

// )

// for(let i=0;customParagraphs.length-1;i++){

//     if(i % 2 == 0){

//         customParagraphs[i].style.background="red"

//     }

// }


// const number1 = prompt("Enter your first number: ")

// const number2 = prompt("Enter your second number: ");

// const total = Number(number1) + Number(number2);


// document.querySelector(".total").innerText=total;


const description = document.getElementById("description");


const button = document.getElementById("btn");


button.addEventListener('click',displayMyName);

function displayMyName(){


    alert("My name is Dennis")


}

document.addEventListener('keydown',diplayKeyStrokes)

function diplayKeyStrokes(event){

    document.getElementById('display').innerText = event.key

}
