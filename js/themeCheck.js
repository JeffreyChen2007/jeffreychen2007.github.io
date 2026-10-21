const systemlightTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
const themeButton = document.getElementById("theme");

function themeCheck() {
    if (getCookie("theme") != "") return;

    if (systemlightTheme) {
        document.cookie = "theme=light;";
        themeButton.src = "/img/sun.svg";
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
    } 
    else {
        document.cookie = "theme=dark;";
        themeButton.src = "/img/moon.svg";
    }
};