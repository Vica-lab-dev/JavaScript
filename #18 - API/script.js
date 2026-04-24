const apiUrl ="http://www.omdbapi.com/"

let terminatorSearch = await callOMDbApi("s=Terminator");

let homeAloneSearch = await callOMDbApi("s=Home Alone&y=1990");
console.log(homeAloneSearch);

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();
}