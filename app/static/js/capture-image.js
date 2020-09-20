const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');

const snapshotAAA = document.getElementById('snapshot').value;


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
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(handleSuccess);