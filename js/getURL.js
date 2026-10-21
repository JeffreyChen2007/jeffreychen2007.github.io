function getURL() {
    if (document.URL.includes("aboutme")) {
        url = document.URL.replace("aboutme/", "")
    }
    else if (document.URL.includes("contact")) {
        url = document.URL.replace("contact/", "")
    }
    else {
        url = document.URL
    }
}