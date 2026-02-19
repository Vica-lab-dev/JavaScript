let button = document.querySelector("#addCard");
let div = document.querySelector("#cards");

button.addEventListener("click", function() {
        let h2 = document.createElement("h2");
        h2.textContent = "Title";

        let paragraph = document.createElement("p");
        paragraph.textContent = "Text";

        div.appendChild(h2);
        div.appendChild(paragraph);
})