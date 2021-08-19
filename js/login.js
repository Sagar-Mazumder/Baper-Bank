document.getElementById('submit-button').addEventListener('click', function () {
    // console.log("Login Sucessfull")
    const email = document.getElementById('email-field');
    const emailValue = email.value;
    //    console.log(emailValue)
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
    // console.log(passwordValue)
    if (emailValue == 'sagarmazumder' && passwordValue == '123456') {
        window.location.href = 'banking.html'
    }
});