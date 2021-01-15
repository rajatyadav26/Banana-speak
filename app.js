var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var divOutput = document.querySelector("#output");

console.log(textInput);

function clickHandler() {
    divOutput.innerText = "mojo jojo " + textInput.value;
};

btnTranslate.addEventListener("click", clickHandler)