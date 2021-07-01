async function handleWeatherRequest(event) {
   // handle the form data and get city data
    event.preventDefault();
    const city = document.querySelector("input[name='city']").value;
    city.trim()

    const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=870b1b10b58578f725b70b13aff6c357`;
    const response = await fetch(urlString); //this is the API call
    const data = await response.json();//convert to json
    const convertedTemp = (data.main.temp - 273.15) * 9/5 + 32;
    // display info to the DOM
    document.querySelector("#weather-result").innerText = `The weather in ${city} is currently ${convertedTemp}`;
  }
  document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);



  async function handleWeatherRequest(event) {
    // handle the form data and get city data
    event.preventDefault();
    const city = document.querySelector("input[name='city']").value;
    city.trim()
    // build the url string and make API call
    const urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=870b1b10b58578f725b70b13aff6c357`;
    const response = await fetch(urlString); // this is the API call
    const data = await response.json(); // convert to json
    // convert temp to F
    const convertedTemp = (data.main.temp - 273.15) * 9/5 + 32;
    // display info to the DOM
    document.querySelector("#weather-result").innerText = `The weather in ${city} is currently ${convertedTemp}`;
  }
  document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);