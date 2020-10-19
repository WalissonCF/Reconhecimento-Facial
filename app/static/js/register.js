const formPageRegister = document.getElementById('content-form-register');
const buttonNextPageRegister = document.getElementById('next-page-register');
const contentCaptureImagePageRegister = document.querySelector('.capture-image-user');

$("#confirm-password").focusout(function () {
    if ($("#password").val() != $("#confirm-password").val()) {
        window.alert('Senhas não conferem!');
    }

});

function desativaCampos(campo) {
    desativa = campo;
    desativa.style.visibility = 'hidden';
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

