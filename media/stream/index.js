const startButton = document.getElementById("start");

const stopButton = document.getElementById("stop");

const captureButton = document.getElementById("capture");


const video = document.getElementById("video");


const canvas = document.getElementById("canvas");



const imagesContainer = document.getElementById("captured-images");




const startCamera = async () =>{

    const stream = await navigator.mediaDevices.getUserMedia({video:true});

    video.srcObject = stream;


    startButton.disabled = true;


    stopButton.disabled = false;


}

const stopCamera = async () =>{

    const stream = video.srcObject;

    if(stream){

        stream.getTracks().forEach((track)=>{

            track.stop()

        })

        video.srcObject = null;

        startButton.disabled = false;

        stopButton.disabled = true;

    }


}


const captureImage = () =>{

    if(!video.srcObject){

        alert("The camera is not running");

        return;

    }

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(video,0,0,canvas.width,canvas.height);

    const imageUrl = canvas.toDataURL("image/png");

    const img = document.createElement("img");


    img.src = imageUrl;

    imagesContainer.appendChild(img);

    console.log(imageUrl);


}



startButton.addEventListener("click",startCamera)

stopButton.addEventListener("click",stopCamera)

captureButton.addEventListener("click",captureImage)

