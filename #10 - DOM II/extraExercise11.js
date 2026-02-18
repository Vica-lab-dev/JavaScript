let ul = document.querySelector("#roles");

let roles = ["Admin", "User", "Guest"];

let roleQuestion = prompt("What is your role?").toLowerCase();

let li = document.createElement("li");

switch (roleQuestion)
{
    case "admin":
        li.textContent = "Full access!";
        break;
    case "user":
        li.textContent = "Limited access!";
        break;
    case "guest":
        li.textContent = "Read-only!";
        break;
    default:
        li.textContent = "You don't have access!";
}

ul.appendChild(li);

