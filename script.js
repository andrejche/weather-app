const apiKey = '51a358b67f2249eea13211340232303';

function checkWeather() {
    const location = document.getElementById('location-input').value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                const errorContainer = document.createElement('div');
                errorContainer.classList.add('error-container');
                errorContainer.innerHTML = `<p>${data.error.message}</p>`;
                document.getElementById('weather-container').appendChild(errorContainer);
            } else {
                const weatherContainer = document.getElementById('weather-container');
                weatherContainer.innerHTML = `
        <center>
            <div class="weather-wrap">
            <img class="pic" src="cloud.png" width="25%">
            <div class="info-wrap">
            <h1 class="temp">${data.current.temp_c}°C</h1>
            <h1 class="location">${data.location.name}, ${data.location.country}</h1>
            <h1 class="last-update">Last updated: ${data.current.last_updated}</h1>
            </div>
            </div>
        </center>
        `;

                const searchContainer = document.getElementById('search-container');
                searchContainer.parentNode.removeChild(searchContainer);
            }
        })
        .catch(error => console.log(error));
}

document.getElementById('check-weather-button').addEventListener('click', checkWeather);