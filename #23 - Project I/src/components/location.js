export function getUserLocation() {
    let userLocation = "";

    while(userLocation.trim() === "") {
        userLocation = prompt('Enter location');
    }

    return userLocation;
}