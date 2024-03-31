
const apiKey = "d3c42713f099a12710261a32d83aefb3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector(".weather-icon");

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
        let imgIcon = data.weather[0].main;
        if (imgIcon === "Clouds") {
            image.src = "../image/clouds.png";
        } 
        else if (imgIcon === "Clear") {
            image.src = "../image/clear.png";
        }
        else if (imgIcon === "Rain") {
            image.src = "../image/rain.png";
        }
        else if (imgIcon === "Drizzle") {
            image.src = "../image/drizzle.png";
        }
        else if (imgIcon === "Mist") {
            image.src = "../image/mist.png";
        }
        else if (imgIcon === "Wind") {
            image.src = "../image/wind.png";
        }
    } catch (error) {
        console.error("Error occur", error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(search.value)
})
