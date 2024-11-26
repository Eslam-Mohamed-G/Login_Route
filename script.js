// long In
var signinEmailInput = document.getElementById("signinEmail");
var signinPasswordInput = document.getElementById("signinPassword");

// signUp
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var message = document.getElementById("incorrect");

var EmailList = [];

function validName(){

}
function validEmail(){
    var email = emailInput.value

    if(!email){
        message.textContent = "All inputs is required";
    }
}

function validPasswor() {
    var password = passwordInput.value;
}

function signUp(){

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