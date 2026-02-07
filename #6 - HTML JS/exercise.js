let weather = prompt("Enter weather condition").toLowerCase();

switch (weather)
{
    case "sunny":
        alert("Wear sunglasses!");
        break;
    case "rainy":
        alert("Take an umbrella!");
        break;
    case "cloudy":
        alert("It’s cloudy outside — a light layer could be useful");
        break;
    default:
        alert("Try sunny, cloudy or rainy!");
        break;
}