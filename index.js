var button = document.getElementsByClassName("nav-toggle")[0];
var menu = document.getElementsByClassName("menu")[0];

button.addEventListener("click",() => {
    menu.classList.toggle("visible");
})