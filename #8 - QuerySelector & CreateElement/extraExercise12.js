let ul = document.querySelector("#statuses");

let statuses = [true, false, true, true, false];

for(let status of statuses)
{
    let li = document.createElement("li");
    if(status === true)
    {
        li.textContent = "Logged in";
    }
    else
    {
        li.textContent = "Not logged in";
    }

    ul.appendChild(li);
}