let navbar = document.querySelector('nav');
window.onscroll = function(){
    if(window. scrollY > 0){
        navbar.style.background = "#eefff9";
    }else{
        navbar.style.background = "transparent";
    }
}

let menuLinks = document.getElementById("menu-links")

function toggleMenu(){
        menuLinks.classList.toggle("show-menu");
}