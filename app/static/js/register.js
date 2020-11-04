const formPageRegister = document.getElementById('content-form-register');
const buttonNextPageRegister = document.getElementById('next-page-register');
const buttonConfirm = document.getElementById('register-user');
const contentCaptureImagePageRegister = document.querySelector('.capture-image-user');
const textConfirm = document.querySelector('.text-confirm');
const contentImageUser = document.getElementById('content-image-user');
const playerRegister = document.getElementById('player');
const captureRegister = document.getElementById('capture');
const canva = document.querySelector('.canva-snapshot');
const canvaSnapshot = document.querySelector('.canva-snapshot');

$("#confirm-password").focusout(function () {
    if ($("#password").val() != $("#confirm-password").val()) {
        window.alert('Senhas não conferem!');
    }

});

function desativaCampos(campo) {
    desativa = campo;
    desativa.style.visibility = 'hidden';
}

function ativaCampos(campo) {
    desativa = campo;
    desativa.style.visibility = 'visible';
}

function removeAtributos(campo, atributoParaSerRemovido) {
    remove = campo;
    remove.removeAttribute(atributoParaSerRemovido);
}

function next() {
    desativaCampos(formPageRegister);
    removeAtributos(contentCaptureImagePageRegister, "hidden");
    removeAtributos(contentCaptureImagePageRegister, "hidden");
}

$('#content-form-register').submit(function(e){
    e.preventDefault()
    next()
});

buttonConfirm.addEventListener('click', function () {
    removeAtributos(textConfirm, "hidden");
});

$("#cep").focusout(function () {

    $.get("https://viacep.com.br/ws/" + $("#cep").val() + "/json/", function (resultado) {

        if (!resultado.erro) {
            $("#street").val(resultado.logradouro)
            $("#neighborhood").val(resultado.bairro)
            $("#city").val(resultado.localidade)
            $("#state").val(resultado.uf)
        } else {
            $("#cep").val("");
            window.alert("Cep informado é invalido, digite novamente.");
        }

    })

});