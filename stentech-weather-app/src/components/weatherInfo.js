import { useState, useEffect} from 'react';

const WeatherInfo = (weatherData) => {

    const { location, temperature, condition, icon, humidity, windSpeed } = weatherData;

    return (
        <div className="weather-card">
            <h2>{location}</h2>
            <img src={icon} alt={condition} className="weather-icon" />
            <div className="temperature">{temperature}°C</div>
            <div className="condition">{condition}</div>
            <div className="details">
                <div>Humidity: {humidity}%</div>
                <div>Wind: {windSpeed} km/h</div>
            </div>
        </div>
    );

}

export default WeatherInfo;