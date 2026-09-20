const video = document.getElementById("video");

const canvas = document.getElementById("canvas");


navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{


    video.srcObject = stream;


}).catch((err)=>{


    console.error("Camera access denied: ", err);

})


document.getElementById("capture").addEventListener("click",()=>{

    const ctx = canvas.getContext("2d");


    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    
})


