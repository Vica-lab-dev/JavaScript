let h1 = document.querySelector("#title");

let title = "Hello World";

if(title.length >= 5)
{
    h1.textContent = "Long title";
}
else
{
    h1.textContent = "Short title";
}