let input = document.querySelector("#focusInput");

input.addEventListener("focus", function(){
    input.style.backgroundColor = "lightGreen";
})

input.addEventListener("blur", function(){
    input.style.backgroundColor = "white";
})