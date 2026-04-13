fetch("https://dummyjson.com/recipes?limit=10&sortBy=name&order=asc")
.then(response => response.json())
.then(data =>
{
    let ul = document.querySelector("#recipes");

    data.recipes.forEach(recipe =>
    {
        let li = document.createElement("li");
        li.textContent = recipe.name;
        ul.appendChild(li);
    });
})
.catch(error => console.log(error));