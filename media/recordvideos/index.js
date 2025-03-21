const video = document.getElementById("video");

const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const downloadLink = document.getElementById("download");


let mediaRecorder;


let recordedChunks = [];


const startCamera = async () =>{

    try{

        const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true});

        video.srcObject = stream;

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) =>{

            if(event.data.size > 0) recordedChunks.push(event.data);
        }

        mediaRecorder.onstop = () =>{

            const blob = new Blob(recordedChunks,{type:"video/webm"});

            const url = URL.createObjectURL(blob);


            downloadLink.href = url;

            downloadLink.download = "recorded-webm.webm";

            downloadLink.style.display = "block";

            downloadLink.textContent = "Download Video";

        }

        mediaRecorder.start();

        startBtn.disabled = true;

        stopBtn.disabled = false;


    }catch(error){

        console.error(`Error occurred: ${error.message}`);

    }


}

const stopRecording = () => {

    if(mediaRecorder && mediaRecorder.state === "recording") {

        mediaRecorder.stop();

    }

    video.srcObject.getTracks().forEach((track)=>{

        track.stop();

        startBtn.disabled = false;

        stopBtn.disabled = true;

    })

}

startBtn.addEventListener("click",startCamera);

stopBtn.addEventListener("click",stopRecording);