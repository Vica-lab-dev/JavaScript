let button = document.querySelector("#button");
let div = document.querySelector("div");

button.addEventListener("click", function(){
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            firstName: "Vica",
            lastName: "Mal",
            age: 28
        }),
    }).then(response => response.json())
        .then(data => {
            if(data?.id)
            {
                div.style.background = "lightGreen";
                div.style.height = "300px";
                div.style.width = "100%";
            }
        })
})