let ul = document.querySelector("#roles");

let roles = ["Admin", "User", "Guest"];


for(let role of roles)
{
    let li = document.createElement("li");

    switch (role)
    {
        case "Admin":
            li.textContent = "Admin access";
            break;
        case "User":
            li.textContent = "User";
            break;
        case "Guest":
            li.textContent = "Guest";
            break;
        default:
            li.textContent = "Undefined role";
    }

    ul.appendChild(li);
}