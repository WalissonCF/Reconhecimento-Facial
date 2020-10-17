const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const formPageRegister = document.getElementById('content-form-register');
const buttonNextPageRegister = document.getElementById('next-page-register');
const contentCaptureImagePageRegister = document.querySelector('.capture-image-user');

$(confirmPassword).focusout(function () {
    if (password.value === confirmPassword.value)
        window.alert('Parabens');
    else
        window.alert('Erouuuuuuuuuuuuuuuuu!');
});

function desativaCampos(campo) {
    desativa = campo;
    desativa.style.visibility = 'hidden';
}

function removeAtributos(campo, atributoParaSerRemovido) {
    remove = campo;
    remove.removeAttribute(atributoParaSerRemovido);
}

buttonNextPageRegister.addEventListener('click', function() {
    desativaCampos(formPageRegister);
    removeAtributos(contentCaptureImagePageRegister, "hidden");
    removeAtributos(contentCaptureImagePageRegister, "hidden");
})