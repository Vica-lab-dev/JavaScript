let input = document.querySelector("#textInput");
let paragraph = document.querySelector("#charCount");

input.addEventListener("input", function (event){
    let charCount = event.currentTarget.value;
    paragraph.textContent = charCount.length;
})