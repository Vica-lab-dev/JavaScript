let temperature = -1;

if(temperature < 15)
{
    console.log("It's cold!");
}
else if(temperature >= 15 && temperature <= 25)
{
    console.log("Moderate temperature!");
}
else
{
    console.log("It's Hot!");
}

let timeOfDay = "Night";

if(timeOfDay.toLowerCase() === "morning")
{
    console.log("Good Morning!");
}
else if(timeOfDay.toLowerCase() === "afternoon")
{
    console.log("Good afternoon!");
}
else if(timeOfDay.toLowerCase() === "evening")
{
    console.log("Good evening!");
}
else
{
    console.log(timeOfDay);
}

let experience = 1;

if(experience <= 2)
{
    console.log("Beginner!");
}
else if(experience > 2 && experience <= 5)
{
    console.log("Experienced worker!");
}
else
{
    console.log("Veteran employee!");
}