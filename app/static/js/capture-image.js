const player = document.getElementById('player');
const snapshotCanvas = document.getElementById('snapshot');
const captureButton = document.getElementById('capture');
const login = document.getElementById('content-login');
const aviso = document.querySelector('.svg-alert');
const mensagemDeAviso = document.querySelector('.text-info-p');
const buttonsConfirm = document.querySelector('.confirm');
const buttonsConfirmImage = document.querySelector('.confirm-image');

const handleSuccess = function (stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

function desativaCampos(campo) {
    desativa = campo;
    desativa.style.visibility = 'hidden';
}

function removeAtributos(campo, atributoParaSerRemovido) {
    remove = campo;
    remove.removeAttribute(atributoParaSerRemovido);
}

captureButton.addEventListener('click', function () {
    const context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);

    desativaCampos(player);
    desativaCampos(captureButton);
    if ($("#content-login").length) { 
        removeAtributos(login, "hidden"); 
    } 
    desativaCampos(aviso);
    desativaCampos(mensagemDeAviso);
    removeAtributos(snapshotCanvas, "hidden");
    if ($(".confirm").length) { 
        removeAtributos(buttonsConfirm, "hidden"); 
    }
    if ($(".confirm-image").length) { 
        removeAtributos(buttonsConfirmImage, "hidden"); 
    }
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(handleSuccess);

navigator.getUserMedia({ video: true }, function () {
    console.log("Okay");
}, function () {
    // webcam is not available
    window.alert("Você não possui webcam!");
    console.log("Erro!");
});