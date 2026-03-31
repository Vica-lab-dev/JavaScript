function printRole(roles)
{
    let result = [];

    for (let role of roles)
    {
        if(role === "admin")
        {
            result.push("admin");
        }
        else if(role === "user")
        {
            result.push("user");
        }
        else if(role === "guest")
        {
            result.push("guest");
        }
        else
        {
            result.push("unknown");
        }
    }

    return result;
}

let input = ["admin", "user", "sadsa"]
let output = printRole(input);
console.log(output);