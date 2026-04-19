fetch("https://api.thecatapi.com/v1/breeds")
.then(response => response.json())
.then(data =>
{
    let ul = document.querySelector("#sortedNames");
    let names = data.filter(cat => cat.name);
    names.sort((a, b) => a.name.localeCompare(b.name));
    names.forEach(cat =>
    {
       let li = document.createElement("li");
       li.textContent = cat.name;
       ul.appendChild(li);
    });
})
.catch(err => console.log(err));