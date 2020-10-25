
function loginUser() {
    var formdata = new FormData();
    formdata.append('username', $("#username").val());
    formdata.append('password', $("#password").val());

    var settings = {
        "url": "http://127.0.0.1:5000/validCredentials",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": formdata
    };

    $.ajax(settings).done(function (response) {
        callback = JSON.parse(response)
        if(callback.authenticated == true){
            window.alert('Bem vindo ao Sistema')
            window.location.href= "http://127.0.0.1:5000/index"
        }else{
            window.alert('Credenciais não conferem')
        }
    });
}

