const mealDbAPI = "https://www.themealdb.com/api/json/v1/1/";

const response = await fetch(mealDbAPI+"categories.php");
const data = await response.json();

const categorySelect = document.querySelector("#categories");

for(let category of data.categories){
    console.log(category);
    let categoryElement = document.createElement("option");
    categoryElement.value = category.idCategory;
    categoryElement.innerText = category.strCategory;
    categorySelect.append(categoryElement);
}

