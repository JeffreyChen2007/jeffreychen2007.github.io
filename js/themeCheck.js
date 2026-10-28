const systemlightTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
const themeButton = document.getElementById("theme");

function themeCheck() {
    if (localStorage.theme != null) return;

    if (systemlightTheme) {
        localStorage.theme = "light"
        themeButton.src = "/img/icon/sun.svg";
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
    } 
    else {
        localStorage.theme = "dark"
        themeButton.src = "/img/icon/moon.svg";
    }
};

function themeRecheck() {
    if (localStorage.theme == "light") {
        localStorage.theme = "light"
        themeButton.src = "/img/icon/sun.svg";
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
    }
    else {
        localStorage.theme = "dark"
        themeButton.src = "/img/icon/moon.svg";
    }
}