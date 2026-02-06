let names = ["admin", "administrator", 'viktor'];

let name= prompt("Enter your name").toLowerCase();

if(names.includes(name))
{
    alert("Welcome "+name);
}
else
{
    alert("You do not have access to this site!");
}