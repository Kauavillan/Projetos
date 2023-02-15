let menu = document.querySelector("#menu-mobile");
let openMenu = document.querySelector("#open");
let closeMenu = document.querySelector("#close");

openMenu.addEventListener("click", function(){
    menu.style.display = "block";
})
closeMenu.addEventListener("click", function(){
    menu.style.display = "none";
})