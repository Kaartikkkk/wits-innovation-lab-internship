async function getWeather() {

    const weatherCard =
        document.getElementById("weatherCard");

    weatherCard.innerHTML =
        "<p>Loading...</p>";

    try {

        const response =
            await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=28.98&longitude=77.02&current_weather=true"
            );

        const data =
            await response.json();

        weatherCard.innerHTML = `

            <h2>Current Weather</h2>

            <p>
                Temperature:
                ${data.current_weather.temperature}°C
            </p>

            <p>
                Wind Speed:
                ${data.current_weather.windspeed} km/h
            </p>

        `;

    }
    catch (error) {

        weatherCard.innerHTML =
            "<p>Unable to load weather.</p>";
    }
}