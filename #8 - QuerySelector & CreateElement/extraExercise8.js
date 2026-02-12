let points = 49;
let paragraph = document.querySelector("#result");

if(points >= 75)
{
    paragraph.textContent = "Excellent!";
}
else if(points < 75 && points >= 50)
{
    paragraph.textContent = "Good!";
}
else
{
    paragraph.textContent = "Fail!";
}