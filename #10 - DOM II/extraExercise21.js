let input = document.querySelector("#focusInput");
let secondInput = document.querySelector("#secondFocusInput");

input.addEventListener("focus", function (){
    input.style.backgroundColor = "red";
})

secondInput.addEventListener("mouseover", function (){
    secondInput.style.backgroundColor = "blue";
})

secondInput.addEventListener("mouseout", function (){
    secondInput.style.backgroundColor = "white";
})