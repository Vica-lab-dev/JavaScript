let name = prompt("Enter your name");
let color = prompt("Enter text color");
let marqueeElement = document.getElementById("name");
marqueeElement.style.color = color;
marqueeElement.style.backgroundColor = "black";
marqueeElement.innerText = name;