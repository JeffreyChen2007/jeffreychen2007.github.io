themeButton.onclick = function themeChange() {
    if (document.cookie == "theme=light") {
        console.log("a");
        document.cookie = "theme=dark";
        document.body.removeAttribute("theme");
        themeButton.src = url + "/img/moon.svg";
        document.body.classList.toggle("shadow");
    }
    else {
        console.log("b");
        document.cookie = "theme=light";
        document.body.setAttribute("theme", "light");
        document.body.classList.toggle("shadow");
        themeButton.src = url + "/img/sun.svg";
    }
};