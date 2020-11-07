
function loginUser() {
    var canvas = document.getElementById('snapshot')
    var formdata = new FormData();
    formdata.append('username', $("#username").val());
    formdata.append('password', $("#password").val());
    formdata.append('image', canvas.toDataURL());

    var settings = {
        "url": "http://127.0.0.1:8085/facialrecognition",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": formdata
    };

    $.ajax(settings).done(function (response) {
        callback = JSON.parse(response)
        console.log(callback)
        if(callback.authenticated == true){
            window.alert('Bem vindo ao Sistema')
            // window.location.href = "http://127.0.0.1:5000/index"
        } else {
            window.alert('Credenciais não conferem')
        }
    });
}

