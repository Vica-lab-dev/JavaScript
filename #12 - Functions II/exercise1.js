let letters = ["a", "b", "c"];

function checkLetter(letterList, letter)
{
    for(let lett of letterList)
    {
        if(lett === letter.toLowerCase())
        {
            return true;
        }
    }

    return false;

}

let result = checkLetter(letters, "A");
console.log(result);

let result2 = letters.includes("a");
console.log(result2);