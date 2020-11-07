const formRegister = document.getElementById('content-form-register');
const captureImageRegister = document.querySelector('.capture-image-user');


// $('#password').focusout(function(){
//     if($("#password").val().length < 7 && $("#password").val().length > 0 ){
//         window.alert('A senha deve ter mais do que 7 caracteres!');
//         $("#password").val('')
//     }
// });

$('#username').focusout(function () {
    if ($("#username").val().length < 7 && $("#username").val().length > 0) {
        window.alert('O nome do usuario ter mais pelo menos 7 caracteres!');
        $("#username").val('')
    }
});

$("#confirm-password").focusout(function () {
    if ($("#password").val() != $("#confirm-password").val()) {
        window.alert('Senhas não conferem!');
    }

});

function changeStateField(field, newState) {
    changeField = field;
    changeField.style.visibility = newState;
}


function removeAtributos(field, state) {
    remove = field;
    remove.removeAttribute(state);
}


$('#content-form-register').submit(function (e) {
    e.preventDefault()
    changeStateField(formRegister, 'hidden');
    removeAtributos(captureImageRegister, "hidden");
    removeAtributos(captureImageRegister, "hidden");
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