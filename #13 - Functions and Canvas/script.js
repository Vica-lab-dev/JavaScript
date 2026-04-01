let clickButton = document.querySelector("#clickMe");
let clickButton2 = document.querySelector("#clickMe2");

clickButton.addEventListener("click", clickEvent);
clickButton2.addEventListener("click", clickEvent);

function clickEvent()
{
    console.log("Test click event");
}