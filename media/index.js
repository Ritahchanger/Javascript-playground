const video = document.getElementById("video");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const captureButton = document.getElementById("capture");
const canvas = document.getElementById("canvas");
const imageContainer = document.getElementById("captured-images");

let capturedImages = [];

const startCamera = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        video.srcObject = stream;
        startButton.disabled = true;
        stopButton.disabled = false;
        captureButton.disabled = false; // Enable capture button when camera starts

    } catch (error) {
        console.log("Error accessing the camera:", error);
    }
};

const stopCamera = () => {
    const stream = video.srcObject;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;

        startButton.disabled = false;
        stopButton.disabled = true;
        captureButton.disabled = true; // Disable capture button when camera stops
    }
};

const captureImage = () => {
    if (!video.srcObject) {
        console.log("Camera is not running!");
        return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageUrl = canvas.toDataURL("image/png");
    capturedImages.push(imageUrl);

    console.log("Captured Images: ", capturedImages);

    // Create and append the captured image
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("captured-image");
    imageContainer.appendChild(img);
};

// Event Listeners
startButton.addEventListener("click", startCamera);
stopButton.addEventListener("click", stopCamera);
captureButton.addEventListener("click", captureImage);

// Initial button states
stopButton.disabled = true;
captureButton.disabled = true;
