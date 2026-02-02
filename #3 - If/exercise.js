let content = "site";

if(content == "video")
{
    console.log("https://www.youtube.com/watch?v=oLKMuH3SiRA");
}
else if(content == "site")
{
    console.log("itmentorstva.com")
}
else
{
    console.log("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxngkaPCwZS-pN67h-JfCygadqtqu7g2N7NQ&s");
}


let price = 500;

if(price < 500)
{
    console.log("It is cheap!");
}

else if(price > 500)
{
    console.log("It is expensive!");
}

let component = "keyboard";
let componentPrice = 60;

if(component == "keyboard" && componentPrice == 50)
{
    console.log("Testing successful!");
}
else
{
    console.log("Testing failed!");
}

let age = 27;

if(age < 18)
{
    console.log("Minor!");
}
else
{
    console.log("Adult!");
}

let array = [-25, 64, 7, 43, 75];
let last = array[array.length - 1]

if(array[0] + last == 50)
{
    console.log("The sum is 50!");
}
else if(array[0] + last > 50)
{
    console.log("The sum is greater than 50!");
}
else
{
    console.log("The sum is less than 50!")
}

let fruit = "banaNa";

if(fruit.toLowerCase() == "apple")
{
    console.log("The fruit is Apple!")
}
else if(fruit.toLowerCase() == "banana")
{
    console.log("The fruit is Banana!");
}
else
{
    console.log("Some other fruit!");
}