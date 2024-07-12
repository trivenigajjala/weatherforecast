const apiKey = 'd016ab599a2db999440837076cff7be9'; 

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('location').textContent = data.name;
        document.getElementById('weather').textContent = data.weather[0].main;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').textContent = data.weather[0].description;

    } catch (error) {
        console.error('Error fetching weather data', error);
        alert('Failed to fetch weather data. Please try again.');
        
    }
    
    function getWeatherIconUrl(weatherCode) {
        
        switch (weatherCode) {
            case '01d': 
                return 'http://example.com/icons/clear-sky.png';
            case '01n': 
                return 'http://example.com/icons/clear-sky-night.png';
            case '02d': 
                return 'https://images.unsplash.com/photo-1532178910-7815d6919875?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwc2t5fGVufDB8fDB8fHww';
            case '02n': 
                return 'http://example.com/icons/few-clouds-night.png';
            
            default:
                return 'http://example.com/icons/default.png'; 
        }
    }
    
    function getTemperatureIcon(temperature) {
        if (temperature > 30) {
            return 'images/hot.png';
        } else if (temperature > 15) {
            return 'images/warm.png';
        } else {
            return 'images/cold.png';
        }
    }
}
