var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

console.log(textInput);

function clickHandler() {
    console.log("Clicked")
    console.log("input is : ", textInput.value)
}

btnTranslate.addEventListener("click", clickHandler)