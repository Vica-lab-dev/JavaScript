let paragraph = document.querySelector("#doubleClick");

paragraph.addEventListener("dblclick", function (){
    paragraph.textContent = "Double-clicked";
})