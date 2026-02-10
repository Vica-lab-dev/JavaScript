/**
 * -querySelector -> "#name" ili ".name" - vraca jedan element
 * -querySelectorAll -> "#name" ili ".name" - vraca array sa elementima
 */

document.querySelector("#title").style.color = "red";
document.querySelector(".subtitle").style.color = "green";
document.getElementsByClassName("subtitle2")[0].style.color = "blue";

let products = document.querySelectorAll(".product");

for(let product of products)
{
    product.style.color = "red";
}