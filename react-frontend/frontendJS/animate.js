const box = document.getElementById("box")


let position = 0;



function moveBox(){


    if(position < 300){

        position++;

        box.style.left = position + "px";

        requestAnimationFrame(moveBox)

    }

}

moveBox()