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