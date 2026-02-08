let name = prompt("Enter your name");
let color = prompt("Enter text color");
let bgColor = prompt("Enter background color");
let marqueeElement = document.getElementById("name");
marqueeElement.style.color = color;
marqueeElement.style.backgroundColor = bgColor;
marqueeElement.innerText = name;