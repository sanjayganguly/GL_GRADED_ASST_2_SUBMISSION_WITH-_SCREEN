import { LoginCredentials } from './loginCredentials.js';
import { displaySignUpPage, displayLoginPage, sigupUser, loginUser } from './loginPage.js';

document.getElementById("sigup-btn").onclick = displaySignUpPage;
document.getElementById("login-btn").onclick = displayLoginPage;
document.getElementById("sigup-btn2").onclick = sigupUser;
document.getElementById("login-btn2").onclick = loginUser;
