let array = [10, 20, 30, 40, 50, 99, 100];

function middleElement(elementList)
{
    if(elementList.length % 2 === 0)
    {
        return "Array has even number of elements, no middle element!";
    }

    let middleIndex = Math.floor(elementList.length / 2);
    return elementList[middleIndex];
}

let result = middleElement(array);
console.log(result);