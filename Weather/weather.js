const apiKey = "d3c42713f099a12710261a32d83aefb3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bihar";

async function checkWeather() {
    const respons = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await respons.jeson();

    console.log(data);
    
}