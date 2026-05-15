import axios from 'axios'

let location = "";

while(location.trim() === "") {
    location = prompt('Enter location');
}
console.log(location);