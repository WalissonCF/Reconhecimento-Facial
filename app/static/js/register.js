const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

$(confirmPassword).focusout(function () {
    if (password.value === confirmPassword.value)
        window.alert('Parabens');
    else
        window.alert('Erouuuuuuuuuuuuuuuuu!');
});
