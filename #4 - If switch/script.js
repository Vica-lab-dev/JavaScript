let name = "admin";
let password = "secretpassword";

if(name == "admin" && password == "secretpassword")
{
    console.log("Your data is correct, welcome!");
}
else
{
    console.log("Your data is not correct. Try again!");
}

let userType = "moderator";

if(userType == "admin" || userType == "moderator")
{
    console.log("You are an administrator!");
}
else
{
    console.log("You are a regular member!");
}

let allowedTypes = ["admin", "moderator"];
let typeCheck = allowedTypes.includes(userType);

if(typeCheck)
{
    console.log("You are an administrator!");
}
else
{
    console.log("You are not an administrator!");
}