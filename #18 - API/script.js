let form = document.querySelector("#form");
let input = document.querySelector("#title");
let mainDiv = document.querySelector("#mainDiv");

const apiUrl ="http://www.omdbapi.com/"
let apiKey = "15bc4767";

let terminatorSearch = await callOMDbApi("s=Terminator");

let homeAloneSearch = await callOMDbApi("s=Home Alone&y=1990");
console.log(homeAloneSearch);

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const value = input.value;

    getMovies(value);
})

async function getMovies(movie) {
    let data = await callOMDbApi("s="+movie);

    mainDiv.innerHTML = "";

    if(!data.Search) {
        mainDiv.innerHTML += "No results found";
        mainDiv.style.textAlign = "center";
        return;
    }

    for(let movie of data.Search){

        console.log(movie)

        let div = document.createElement("div");
        div.classList.add("card");

        let h3 = document.createElement("h3");
        h3.innerText = movie.Title;

        let p = document.createElement("p");
        p.innerText = movie.Year;

        let img = document.createElement("img");
        img.src = movie.Poster;
        img.style.width = "180px";
        img.alt = movie.Title;

        div.append(h3, p, img);
        mainDiv.append(div);
    }
}