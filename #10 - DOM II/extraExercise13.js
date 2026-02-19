let div = document.querySelector("#info");
let button = document.querySelector("#toggleBtn");

button.addEventListener("click", function () {
    div.classList.toggle("hidden");
})