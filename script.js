// long In
var signinEmailInput = document.getElementById("signinEmail");
var signinPasswordInput = document.getElementById("signinPassword");
var signinMessage = document.getElementById("incorrect");

// signUp
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var signUpMessage = document.getElementById("exist")

var EmailList = [];
if(localStorage.getItem("EmailList") != null){
    EmailList = JSON.parse(localStorage.getItem("EmailList"));
    console.log(EmailList)
}

function validName(){
    var name = signupNameInput.value;
    var nameRegex = /^[a-zA-Z]{3,}$/;   //The name starts with at least three letters

    if(name < 3){
        signUpMessage.textContent = "Name required";
        return false
    }
    else {
        if(!nameRegex.test(name)){
            signUpMessage.textContent = "Name must start be 3 letters";
            return false
        }else {
            return true
        }
    }
}

function validEmail(){
    var email = signupEmailInput.value;
    var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;   //Regular Expression user.name+123@gmail.com

    if(!email){
        signUpMessage.textContent = "Email required";
        return false
    }else {
        if(!gmailRegex.test(email)){
            signUpMessage.textContent = "Must be valid";
            return false
        }else{
            return true
        }
    }
}

function validPassword() {
    var password = signupPasswordInput.value;

    if(!password){
        signUpMessage.textContent = "Password required";
        return false
    }else {
        return true
    }
}

function signUp(){
    var user = {
        name: signupNameInput.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value
    }
    if(validName() && validEmail() && validPassword()){
        var existsEmail = false;
        for(i = 0; i < EmailList.length; i++){
            if(EmailList[i].email === user.email){
                existsEmail = true;
                break;
            }
        }

        if(existsEmail){
            signUpMessage.textContent = "Email already exists";
        }else {
            EmailList.push(user)
            localStorage.setItem("EmailList", JSON.stringify(EmailList));
            clearSignUpForm();
            signUpMessage.textContent = "sucsess";
        }

        console.log(EmailList)
    }
    // incorrect email or password
}

function checkEmail() {
    email = signinEmailInput.value;
    if(!email){
        signinMessage.textContent = "all input required"
    }else {  
        for(i=0; i<EmailList.length; i++){
            if (EmailList[i].email !== email) {
                signinMessage.textContent = "incorrect email"
                signinEmailInput.style.border = "1px solid red";
                return false;
            }else {
                signinMessage.textContent = "";
                return true;
            }
        }
    }
}

function login() {
    if (checkEmail()) {
        
    }
}

function clearSignUpForm(){
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
    signUpMessage.textContent = "";
}

// localStorage.clear();