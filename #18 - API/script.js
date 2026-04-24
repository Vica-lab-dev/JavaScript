const apiUrl ="http://www.omdbapi.com/"

getMovieByTitle("Terminator");

async function getMovieByTitle(title){
    let response = await callOMDbApi("t="+title);
    console.log(response);
}

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}