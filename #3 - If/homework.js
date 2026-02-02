let name = "Vica";
let password = 'secretpassword';

if((name.toLowerCase() == "vica" && password == "secretpassword") ||
    (name.toUpperCase() == "ADMIN" && password == "secretpassword"))
{
    console.log("Welcome back!");
}
else if((name.toLowerCase() == "vica" && password == "secretpassword") ||
        (name.toUpperCase() == "VICA" && password == "secretpassword"))
{
    console.log("Welcome Vica!");
}
else
{
    console.log("Wrong name or password!");
}
