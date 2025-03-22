// Fetch geographical data
fetch('https://restcountries.com/v3.1/name/Nigeria')
.then(response => response.json())
.then(data => {
    const country = data[0];
    document.getElementById('area').textContent = country.area + ' sq km';
    document.getElementById('population').textContent = country.population.toLocaleString();
    document.getElementById('capital').textContent = country.capital[0];
    document.getElementById('languages').textContent = Object.values(country.languages).join(', ');
    document.getElementById('currency').textContent = Object.keys(country.currencies).join(', ');
    document.getElementById('timezone').textContent = country.timezones[0];
    document.getElementById('callingCode').textContent = country.idd.root + country.idd.suffixes[0];
    document.getElementById('tld').textContent = country.tld[0];
});

// Fetch weather data from OpenWeatherMap API
const apiKey = 'd9e3d676d277d2c94c9a69f900518d44'; 
const city = 'Abuja';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const conditions = data.weather[0].description;
        const windSpeed = data.wind.speed; // Fetching wind speed from the API response
        const windChill = calculateWindChill(temperature, windSpeed);

        document.getElementById("temperature").textContent = temperature + "°C"; // Added °C for clarity
        document.getElementById("conditions").textContent = conditions;
        document.getElementById("wind-speed").textContent = windSpeed + " km/h"; // Displaying wind speed with units
        document.getElementById("wind-chill").textContent = windChill; // Wind chill already includes units
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + "°C";
    } else {
        return "N/A";
    }
}
