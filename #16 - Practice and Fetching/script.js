let mainDiv = document.querySelector("#recipes");
let tagsSelect = document.querySelector("#tags");

let params = new URLSearchParams(window.location.search);
let category = params.get("category");

if(category === null)
{
    fetch("https://dummyjson.com/recipes?limit=10&sortBy=name&order=asc")
        .then(response => response.json())
        .then(data => {
            data.recipes.forEach(recipe =>
            {
                appendCookingRecipe(recipe);
            });
        });
}
else
{
    apiUrl = "https://dummyjson.com/recipes/tag/"+category;

    fetch(apiUrl).then(response => response.json()).then(data =>
    {
        mainDiv.innerHTML = "";

        data.recipes.forEach(recipe =>
        {
            appendCookingRecipe(recipe);
        });
    })
}



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


tagsSelect.addEventListener("change", function()
{
    apiUrl = "https://dummyjson.com/recipes/tag/"+this.value;
    console.log(apiUrl);

    fetch(apiUrl).then(response => response.json()).then(data =>
    {
        mainDiv.innerHTML = "";

        data.recipes.forEach(recipe =>
        {
            appendCookingRecipe(recipe);
        });
    })
})

function buildInstructionsElement(instructions)
{
    let recipeInstruction = document.createElement("ul");

    for(let instruction of instructions)
    {
        let instructionElement = document.createElement("li");
        instructionElement.innerText = instruction;

        recipeInstruction.appendChild(instructionElement);
    }

    return recipeInstruction;
}




function appendCookingRecipe(recipe)
{
    let cookingInstructions = buildInstructionsElement(recipe.instructions);

    let singleRecipe = document.createElement("div");

    let recipeName = document.createElement("h3");
    recipeName.innerText = recipe.name;

    let recipeCuisine = document.createElement("p");
    recipeCuisine.innerText = recipe.cuisine;

    let permalinkElement = document.createElement("a");
    permalinkElement.innerText = "Show recipe";
    permalinkElement.href = "permalink.html?id="+recipe.id;

    singleRecipe.append(recipeName, recipeCuisine, cookingInstructions, permalinkElement);

    mainDiv.appendChild(singleRecipe);
}