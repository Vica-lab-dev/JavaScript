let name = "admIn";
name = name.toLowerCase();

if(name == "admin")
{
    console.log("You are an administrator!");
}
else
{
    console.log("You are not an administrator!");
}

if(name[0] == "a")
{
    console.log("Name starts with vowel!");
}

let firstLetter = ["a", "e", "i", "o", "u"];
if(firstLetter.includes(name[0]))
{
    console.log("First letter is a vowel!");
}

let number = "2";
if(number === 2)
{
    console.log("Number is 2!");
}
else
{
    console.log("Number is not 2!");
}