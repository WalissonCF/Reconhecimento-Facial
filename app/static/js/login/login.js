$(document).ready(function(){
    $("#content-login").submit(function(e){
        e.preventDefault()
        
        const user = $("#user").val()
        const password = $("#password").val()

        $.post('http://127.0.0.1:5000/validation',
        {
            "user":user,
            "password":password
        },
        function(data,status){
            
        })
        
    });

});