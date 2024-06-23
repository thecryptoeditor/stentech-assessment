import React from 'react';
import '../assets/styles/style.css';

const WeatherInfo = ({ weatherData }) => {

    console.log('weatherData', weatherData)
    const {
        name,
        weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed, deg },
        visibility,
        sys: { country, sunrise, sunset },
    } = weatherData;

    const convertTemp = (kelvin) => {
        return (kelvin - 273.15).toFixed(2); // Convert from Kelvin to Celsius
    };

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString();
    };

    return (
        <div className="weather-container">
            <div className="weather-header">
                <h2>Weather in {name}, {country}</h2>
                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />
            </div>
            <div className="weather-info">
                <div className="weather-row">
                    <p><strong>Condition:</strong> {weather[0].main} ({weather[0].description})</p>
                </div>
                <div className="weather-row">
                    <p><strong>Temperature:</strong> {convertTemp(temp)} °C</p>
                    <p><strong>Feels Like:</strong> {convertTemp(feels_like)} °C</p>
                </div>
                <div className="weather-row">
                    <p><strong>Min Temperature:</strong> {convertTemp(temp_min)} °C</p>
                    <p><strong>Max Temperature:</strong> {convertTemp(temp_max)} °C</p>
                </div>
                <div className="weather-row">
                    <p><strong>Pressure:</strong> {pressure} hPa</p>
                    <p><strong>Humidity:</strong> {humidity}%</p>
                </div>
                <div className="weather-row">
                    <p><strong>Visibility:</strong> {visibility} meters</p>
                </div>
                <div className="weather-row">
                    <p><strong>Wind Speed:</strong> {speed} m/s</p>
                    <p><strong>Wind Direction:</strong> {deg}°</p>
                </div>
                <div className="weather-row">
                    <p><strong>Sunrise:</strong> {formatTime(sunrise)}</p>
                    <p><strong>Sunset:</strong> {formatTime(sunset)}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;
