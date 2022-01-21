const navTogle = document.querySelector(".nav_togle");
const navMenu = document.querySelector(".nav__menu-li");


navTogle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav_menu-visible");
});

console.log(navTogle)