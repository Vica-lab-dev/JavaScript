function countLetterRepetition(str, letter)
{
    let count = 0;

    for(let char of str)
    {
        if(char === letter)
        {
            count++;
        }
    }

    return count;

}

let result = countLetterRepetition("viiktorrr", "r");
console.log(result);