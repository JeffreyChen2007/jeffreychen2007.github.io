themeButton.addEventListener("click", ()=> themeChange());
    
function themeChange() {
    if (localStorage.theme == "light") {
        localStorage.theme = "dark"
        document.body.removeAttribute("theme");
        themeButton.src = "/img/icon/moon.svg";
        document.body.classList.toggle("shadow");
    }
    else {
        localStorage.theme = "light"
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
        themeButton.src = "/img/icon/sun.svg";
    }
};