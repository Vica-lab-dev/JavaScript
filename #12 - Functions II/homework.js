function login(username, password)
{
    if(username.toLowerCase() === "admin" && password.toLowerCase() === "admin")
    {
        return true;
    }
    else
    {
        return false;
    }
}

let result  = login("adMin", "aDmIn");
console.log(result);