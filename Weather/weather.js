
const apiKey = "d3c42713f099a12710261a32d83aefb3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(location) {
    try {
        const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
    } catch (error) {
        console.error("Error occur", error);
    }
}

checkWeather("gaya");
