let params = new URLSearchParams(window.location.search);

let recipeId = params.get("id");
let recipeElement =document.querySelector("#recipe");
let tagsSelect = document.querySelector("#tags");


fetch("https://dummyjson.com/recipes/"+recipeId)
.then(res => res.json())
.then(data =>
{
    let recipeName = document.createElement("h3");
    recipeName.innerText = data.name;

    recipeElement.appendChild(recipeName);
})



fetch("https://dummyjson.com/recipes/tags")
    .then(response => response.json())
    .then(data => {
        for(let tag of data)
        {
            let tagsOption = document.createElement("option");
            tagsOption.textContent = tag;
            tagsOption.value = tag;
            tagsSelect.appendChild(tagsOption);

        }
    }).catch(error => console.log(error));



tagsSelect.addEventListener("change",  function()
{
    window.location.href = "index.html?category="+this.value;
});

