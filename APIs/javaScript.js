async function handleWeatherRequest(event) {
   // handle the form data and get city data
    event.preventDefault();
    const city = document.querySelector("input[name='city']").value;
    city.trim();

    const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=870b1b10b58578f725b70b13aff6c357`;
    const response = await fetch(urlString); //this is the API call
    const data = await response.json();//convert to json
}

document.querySelector("weather-search").addEventListener("submit", handleWeatherRequest);