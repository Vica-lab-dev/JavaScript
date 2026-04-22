let button = document.querySelector("#button");
let paragraph = document.querySelector("#paragraph");

function sendPost()
{
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: "Test",
            body: "Content",
            userId: 1
        })
    })
        .then(response => {
            return response.status === 201;
        })
    .catch(error => {
        console.log(error)
        return false;
    });
}


button.addEventListener("click", function() {
    sendPost().then(success => {
        if(success)
        {
            paragraph.textContent = "TRUE";
        }
        else
        {
            paragraph.textContent = "FALSE";
        }
    });
})
