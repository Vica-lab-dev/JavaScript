const mainDiv = document.querySelector('#mealsMainDiv');

const mealDbAPI = "https://www.themealdb.com/api/json/v1/1/";

const data = await getMealDBData("categories.php");

const categorySelect = document.querySelector("#categories");

for(let category of data.categories){
    let categoryElement = document.createElement("option");
    categoryElement.value = category.strCategory;
    categoryElement.innerText = category.strCategory;
    categorySelect.append(categoryElement);
}

categorySelect.addEventListener("change", async function (){
    mainDiv.innerHTML = "";
    const mealsJson = await getMealDBData("filter.php?c="+categorySelect.value);

    for(let meal of mealsJson.meals){
        let div = document.createElement("div");
        div.classList.add("singleMeal");

        let h5 = document.createElement("h5");
        h5.innerText = meal.strMeal;

        let img = document.createElement("img");
        img.classList.add("mealImg");
        img.setAttribute("src", meal.strMealThumb);

        div.append(h5, img);
        mainDiv.append(div);

        div.addEventListener("click", async function(){
            let recipeJson = await getMealDBData("lookup.php?i="+meal.idMeal);

            document.querySelector("#recipeText").innerText = recipeJson.meals[0].strInstructions;
            document.querySelector("#popup").style.display = "flex";
        });
    }
});

document.querySelector("#closePopup").addEventListener("click", function(){
    document.querySelector("#popup").style.display = "none";
});

async function getMealDBData(endpoint){
    let response = await fetch(mealDbAPI+endpoint);
    return await response.json();
}

