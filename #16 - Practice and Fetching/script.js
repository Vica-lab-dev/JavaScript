fetch("https://dummyjson.com/recipes?limit=10&sortBy=name&order=asc")
.then(response => response.json())
.then(data =>
{
    let mainDiv = document.querySelector("#recipes");
    data.recipes.forEach(recipe =>
    {
        let cookingInstructions = buildInstructionsElement(recipe.instructions);

        let singleRecipe = document.createElement("div");

        let recipeName = document.createElement("h3");
        recipeName.innerText = recipe.name;

        let recipeCuisine = document.createElement("p");
        recipeCuisine.innerText = recipe.cuisine;

        let ingredientsList= document.createElement("li");
        ingredientsList.innerText = recipe.ingredients;

        singleRecipe.append(recipeName, recipeCuisine, cookingInstructions);
        mainDiv.appendChild(singleRecipe);
    });
})
    .catch(error => console.log(error));

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