const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const formPageRegister = document.getElementById('content-form-register');
const buttonNextPageRegister = document.getElementById('next-page-register');
const campoCep = document.getElementById('cep');
const contentCaptureImagePageRegister = document.querySelector('.capture-image-user');

$(confirmPassword).focusout(function () {
    if (password.value != confirmPassword.value){
        window.alert('Erouuuuuuuuuuuuuuuuu!');
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

function next(){
    desativaCampos(formPageRegister);
    removeAtributos(contentCaptureImagePageRegister, "hidden");
    removeAtributos(contentCaptureImagePageRegister, "hidden");
}

function teste(){
    console.log("deu")
}
$(campoCep).focusout(function () {
   var cep = $("#cep").val()

    $.get("https://viacep.com.br/ws/"+cep+"/json/", function(resultado){

        $("#street").val(resultado.logradouro)
        $("#neighborhood").val(resultado.bairro)
        $("#city").val(resultado.localidade)
        $("#state").val(resultado.uf)
    })

});

