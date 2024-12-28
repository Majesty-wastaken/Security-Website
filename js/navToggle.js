// Side Navigation Bar

var nav = document.getElementById('side-nav');
var menuIcon = document.getElementsByClassName('fa-bars')[0];


function navToggle() {

    menuIcon.classList.toggle('fa-xmark');
    nav.classList.toggle('open');
    
}