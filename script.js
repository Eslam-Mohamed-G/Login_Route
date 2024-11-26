var emailInput = document.getElementById("signinEmail");
var passwordInput = document.getElementById("signinPassword");
var message = document.getElementById("incorrect");

var EmailList = [];

function validEmail(){
    var email = emailInput.value

    if(!email){
        message.textContent = "All inputs is required";
    }
}

function validPasswor() {
    var password = passwordInput.value;
}

function login(){

    var user = {
        email: emailInput.value,
        password: passwordInput.value
    }
    if(validEmail()){
        EmailList.push(user)
    }
    console.log(EmailList)
    // incorrect email or password
}