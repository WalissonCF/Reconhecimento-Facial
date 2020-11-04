function requestUser() {
    const canvas = document.getElementById('snapshot')
    let dataUser = new FormData();
    dataUser.append("fistname", $("#name").val())
    dataUser.append("lastname", $("#last-name").val())
    dataUser.append("email", $("#email").val())
    dataUser.append("username", $("#username").val())
    dataUser.append("password", $("#password").val())
    dataUser.append("street", $("#street").val())
    dataUser.append("number", $("#number").val())
    dataUser.append("neighborhood", $("#neighborhood").val())
    dataUser.append("city", $("#city").val())
    dataUser.append("state", $("#state").val())
    dataUser.append("image", canvas.toDataURL())



    var settings = {
        "url": "http://127.0.0.1:5000/registerUser",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": dataUser
    };


    $.ajax(settings).done(function (response) {
        callback = JSON.parse(response)
        console.log(callback)
    });

}

