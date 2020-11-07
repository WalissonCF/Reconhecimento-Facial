const playerImage = document.getElementById('player');
const capturedImage = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
const contentLogin = document.getElementById('content-login');
const notifications = document.querySelector('.svg-alert');
const warningMessage = document.querySelector('.text-info-p');
const confirmButton = document.querySelector('.confirm');

const handleSuccess = function (stream) {
    playerImage.srcObject = stream;
};

function changeStateFields(field, newState) {
    changeField = field;
    changeField.style.visibility = newState;

}

function enableField(field, state) {
    remove = field;
    remove.removeAttribute(state);
}


$('#capture').click(function () {
    const context = capturedImage.getContext('2d');
    context.drawImage(playerImage, 0, 0, capturedImage.width,
        capturedImage.height);

    changeStateFields(playerImage, 'hidden');
    changeStateFields(captureButton, 'hidden');
    if ($("#content-login").length) {
        enableField(contentLogin, "hidden");
    }
    changeStateFields(notifications, 'hidden');
    changeStateFields(warningMessage, 'hidden');
    enableField(capturedImage, "hidden");
    if ($(".confirm").length) {
        enableField(confirmButton, "hidden");
    }
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(handleSuccess);

changeStateFields(captureButton, 'hidden');

navigator.getUserMedia({ video: true }, function () {
    $(document).ready(function () {
        changeStateFields(captureButton, 'visible');
    });
}, function () {
    window.alert("Você não possui webcam!");
    console.log("Erro!");
});