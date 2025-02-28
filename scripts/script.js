'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
window.addEventListener("scroll", function() {
    const header__menu = document.getElementById("header__menu");
    if (window.scrollY > 0) {
        header__menu.classList.add("scrolled");
    } else {
        header__menu.classList.remove("scrolled");
    }
});