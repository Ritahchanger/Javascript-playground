let mediaRecorder;

let chunks = [];

let timerInterval;


let seconds = 0;


const recordBtn = document.getElementById("record");

const stopBtn = document.getElementById("stop");

const timerDisplay = document.getElementById("timer");


navigator.mediaDevices.getUserMedia({audio:true})
.then((stream)=>{

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) =>{

        chunks.push(event.data);

    }

    mediaRecorder.onstop = () =>{

        clearInterval(timerInterval);

        const audioBlob = new Blob(chunks, { type:"audio/mp3"});

        const audioURL = URL.createObjectURL(audioBlob);

        const audio = new Audio(audioURL);

        audio.play();

        timerDisplay.textContent = "0";

    }


    recordBtn.addEventListener("click",()=>{

        chunks = [];

        seconds = 0;

        timerDisplay.textContent = seconds;

        mediaRecorder.start();


        recordBtn.disabled = true;

        stopBtn.disabled = false;


        timerInterval = setInterval(()=>{

            seconds++;

            timerDisplay.textContent = seconds;

        },1000)


    });


    stopBtn.addEventListener("click",()=>{

        mediaRecorder.stop();

        recordBtn.disabled = false;

        stopBtn.disabled = true;

    })

}).catch((error)=>{


    console.error("Microphone access denied:", err);

})