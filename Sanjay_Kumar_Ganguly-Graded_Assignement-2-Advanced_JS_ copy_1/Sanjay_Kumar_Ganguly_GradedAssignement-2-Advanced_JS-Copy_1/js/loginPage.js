import { LoginCredentials } from './loginCredentials.js';
import { resumeLandingPage } from './resumePage.js'

function displaySignUpPage () {
    document.getElementById("sigupEl").style.cssText = "display : inline";
    document.getElementById("loginEl").style.cssText = "display : none";
    document.getElementById("sigup-btn").style.cssText = "display : none";
    document.getElementById("login-btn").style.cssText = "display : inline";
    document.getElementById("sigup-btn2").style.cssText = "display : inline";
    document.getElementById("login-btn2").style.cssText = "display : none";
    document.querySelector(".signup-container").style.cssText = "background: rgb(28, 139, 106);";
}

function displayLoginPage () {
    document.getElementById("sigupEl").style.cssText = "display : none";
    document.getElementById("loginEl").style.cssText = "display : inline";
    document.getElementById("sigup-btn").style.cssText = "display : inline";
    document.getElementById("login-btn").style.cssText = "display : none";
    document.getElementById("sigup-btn2").style.cssText = "display : none";
    document.getElementById("login-btn2").style.cssText = "display : inline";
    document.querySelector(".signup-container").style.cssText = "background: rgb(56, 102, 189);";
}

function sigupUser () {
    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;
    if( username === "" || password === ""){
        alert("Username or Password can't be empty.\nPlease retry.")
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    } else{
        LoginCredentials.setUsername(username);
        LoginCredentials.setPassword(password);
        alert("Signup Successful. ")
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    displayLoginPage();
}

function loginUser (){

    let usernameKeyValue = LoginCredentials.getUsername();
    let passwordKeyValue = LoginCredentials.getPassword();

    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');

    if(usernameElement.value === '' || passwordElement.value === '') {
        alert("Either User name or Password is empty.");
    }
    else if ( LoginCredentials.getUsername() === usernameElement.value && 
                LoginCredentials.getPassword() === passwordElement.value) {
        resumeLandingPage();
    }
    else {
        alert("Incorrect User name or Password.");
        this.usernameElement.value = "";
        this.passwordElement.value = "";
    }
}

export { 
    displaySignUpPage,
    displayLoginPage,
    sigupUser,
    loginUser
};