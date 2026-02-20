let div = document.querySelector("#hoverEffect");
div.style.width = "1000px";
div.style.height = "200px";

div.addEventListener("mouseenter", function (){
    div.style.backgroundColor = "blue";
})

div.addEventListener("mouseleave", function (){
    div.style.backgroundColor = "lightBlue";
})