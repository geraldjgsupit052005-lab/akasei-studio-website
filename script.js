function togglePassword(){
var pass=document.getElementById("password");
pass.type = pass.type === "password" ? "text" : "password";
}

function toggleDark(){
document.body.classList.toggle("dark");
}

function login(e){
e.preventDefault();

function toggleMenu(){
var menu = document.getElementById("navMenu");
menu.classList.toggle("show");
}

document.getElementById("landing").style.display="none";
document.querySelector(".partners").style.display="none";   
document.querySelector(".modules").style.display="none";

document.getElementById("dashboard").style.display="block";
}