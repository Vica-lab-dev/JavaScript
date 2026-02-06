// let names = ["admin", "administrator", 'viktor'];
//
// let name= prompt("Enter your name").toLowerCase();
//
// if(names.includes(name))
// {
//     alert("Welcome "+name);
// }
// else
// {
//     alert("You do not have access to this site!");
// }

let grade = prompt("Enter grade 0-100");

if(grade < 100 && grade >= 90)
{
    alert("Excellent!");
}
else if(grade < 90 && grade >= 75)
{
    alert("Good!");
}
else if(grade < 75 && grade >= 50)
{
    alert("Average!");
}
else if(grade < 50 && grade >= 0)
{
    alert("Fail!");
}
else
{
    alert("Try again!");
}