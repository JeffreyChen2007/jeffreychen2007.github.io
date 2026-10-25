var text = document.getElementById("textToCopy");
text.addEventListener(`focus`, () => text.select());
var button = document.getElementById("copyTextButton");
button.addEventListener("click", () => textCopy());

function textCopy() {
    // Select the text field
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);

    // Alert the copied text
    alert("Copied the text: " + text.value);
} 