let div = document.querySelector("#container");

function printRoles(array)
{
    let ul = document.createElement("ul");

    for(let arr of array)
    {
        let li = document.createElement("li");

        switch(arr.toLowerCase())
        {
            case "admin":
                li.innerText = "Administrator";
                break;
            case "user":
                li.innerText = "User";
                break;
            default:
                li.innerText = "Guest";
        }
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

let roles = ["admin", "User", "Guest"];

printRoles(roles);