let params = new URLSearchParams(window.location.search);
let userID = params.get('id');

if(!userID)
{
    console.error("User ID is missing");
}
else
{
    fetch("https://dummyjson.com/users/"+userID,
        {
            method: "DELETE",
        }).then(res => res.json())
        .then(console.log);
}

