let array = ["a", "a", "b", "c", "d", "e", "f", "f", "f"];

function mostFrequentElement(list)
{
    let counts = {};
    let maxCount = 0;
    let mostFrequent;

    for(let element of list)
    {
        if(counts[element])
        {
            counts[element]++;
        }
        else
        {
            counts[element] = 1;
        }

        if(counts[element] > maxCount)
        {
            maxCount = counts[element];
            mostFrequent = element;
        }
    }

    return mostFrequent;
}

let result = mostFrequentElement(array);
console.log(result);

