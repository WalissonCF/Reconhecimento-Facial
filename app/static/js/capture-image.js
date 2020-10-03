const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
const login = document.getElementById('content-login');

const handleSuccess = function (stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

captureButton.addEventListener('click', function () {
    const context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);

    player.style.visibility = 'hidden';
    captureButton.style.visibility = 'hidden';
    login.removeAttribute("hidden");
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(handleSuccess);

navigator.getUserMedia({ video: true }, function () {
    console.log("Okay");
}, function () {
    // webcam is not available
    alert("Você não possui webcam!");
    console.log("Erro!");
});