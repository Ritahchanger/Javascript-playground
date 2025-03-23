const video = document.getElementById("video");

const recordVideo = document.getElementById("record-video");

const canvas = document.getElementById("canvas");

const startButton = document.getElementById("start");

const stopButton = document.getElementById("stop");

const snapButton = document.getElementById("snap");

const liveStream = document.getElementById("live-stream");

const startLiveStreamButton = document.getElementById("start-live-stream");

const stopLiveStreamButton = document.getElementById("stop-live-stream");

const startRecordButton = document.getElementById("start-record-stream");

const stopRecordButton = document.getElementById("stop-record-stream");


let mediaStream = null;

let mediaRecorder = null;

let recordedChunks = [];

const startCamera = async () =>{

    try{

        const stream = await navigator.mediaDevices.getUserMedia({video:true});

        video.srcObject = stream;

        startButton.disabled = true;

        stopButton.disabled = false;

        snapButton.disabled = false;


    }catch(error){

        console.log(`There was an error connecting the camera ${error.message}`);

    }

}

const stopCamera = async () =>{

    try{

        if(video.srcObject){

            const stream  = video.srcObject;

            stream.getTracks().forEach((track)=>{

                track.stop();
            })

            video.srcObject = null;

            startButton.disabled = false;

            stopButton.disabled = true;

            snapButton.disabled = true;

        }


    }catch(error){

        console.log(`There was an error connecting the camera ${error.message}`);

    }

}

const takeSnapShot = () =>{

    if(!video.srcObject) return;

    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    context.drawImage(video,0,0,canvas.width, canvas.height);

    const imageUrl = canvas.toDataURL("image/png");

    const downloadLink = document.createElement("a");

    downloadLink.href = imageUrl;

    downloadLink.download = "snapshot.png";

    downloadLink.textContent = "Download snapshot";

    downloadLink.style.display = "block";

    downloadLink.style.marginTop = "10px";

    document.body.appendChild(downloadLink);

}


startButton.addEventListener("click",startCamera)


stopButton.addEventListener("click",stopCamera)

snapButton.addEventListener("click",takeSnapShot)


const startLiveStream = async () =>{

    try{

        if(!mediaStream){

            mediaStream  = await navigator.mediaDevices.getUserMedia({video:true,audio:true});

        }

        liveStream.srcObject = mediaStream;

        liveStream.play();


        startLiveStreamButton.disabled = true;

        stopLiveStreamButton.disabled = false;


    }catch(error){

        console.log(`Error startin live stream: ${error.message}`);

    }

}

const stopLiveStream = () =>{

    try{

        if(mediaStream){

            liveStream.srcObject = null;

        }

        startLiveStreamButton.disabled = false;

        stopLiveStreamButton.disabled = true;

    }catch(error){

        console.error(`Error stopping live stream: ${error.message}`);

    }

}

startLiveStreamButton.addEventListener("click", startLiveStream);

stopLiveStreamButton.addEventListener("click", stopLiveStream);



const startRecording = async () => {
    
    try{

        if(!mediaStream){
            mediaStream = await navigator.getUserMedia({video:true, audio:true});
        }

        mediaRecorder = new MediaRecorder(mediaStream);

        recordedChunks = [];

        mediaRecorder.ondataavailable = (event) =>{

            if(event.data.size > 0){

                recordedChunks.push(event.data);

            }

        }

        mediaRecorder.onstop = () =>{

            const recordedBlob = new Blob(recordedChunks, {type:"video/webm"});

            const videoUrl = URL.createObjectURL(recordedBlob)

        }

    }catch(error){

        console.log(`Error starting recording: ${error.message}`);

    }

}