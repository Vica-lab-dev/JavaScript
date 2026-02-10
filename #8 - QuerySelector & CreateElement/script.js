/**
 * -querySelector -> "#name" ili ".name" - vraca jedan element
 * -querySelectorAll -> "#name" ili ".name" - vraca array sa elementima
 */

document.querySelector("#title").style.color = "red";
document.querySelector(".subtitle").style.color = "green";
document.getElementsByClassName("subtitle2")[0].style.color = "blue";

let products = document.querySelectorAll(".product");
let prices = document.querySelectorAll(".productPrice");

for(let product of products)
{
    product.style.color = "#616161";
}

for(let price of prices)
{
    if(price.textContent >= 5000)
    {
        price.style.color = "red";
    }
    else
    {
        price.style.color = "green";
    }
}