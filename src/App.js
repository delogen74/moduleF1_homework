import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';
import ForecastTabs from './ForecastTabs';
import WeatherDisplay from './WeatherDisplay';

import './App.css';

const cities = [
    { name: "Moscow", lat: 55.7558, lon: 37.6173 },
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "New York", lat: 40.7128, lon: -74.0060 }
];

function App() {
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [weatherData, setWeatherData] = useState(null);
    const [viewMode, setViewMode] = useState("current"); // "current" или "5day"
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const { lat, lon } = selectedCity;
                const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
                const response = await axios.get(url);
                setWeatherData(response.data);
            } catch (err) {
                setError("Не удалось получить данные о погоде.");
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, [selectedCity, API_KEY]);

    return (
        <div className="app-container">
            <h1>Прогноз погоды</h1>
            <CitySelector
                cities={cities}
                selectedCity={selectedCity}
                onChangeCity={setSelectedCity}
            />
            <ForecastTabs viewMode={viewMode} onChangeView={setViewMode} />

            {loading && <div className="loading">Загрузка...</div>}
            {error && <div className="error">{error}</div>}
            {weatherData && !error && !loading && (
                <WeatherDisplay weatherData={weatherData} viewMode={viewMode} />
            )}
        </div>
    );
}

export default App;
