const apiUrl ="http://www.omdbapi.com/"

let response = await callOMDbApi("t=Terminator");
console.log(response);

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}