import React from 'react';

function WeatherDisplay({ weatherData, viewMode }) {
    if (viewMode === "current") {
        const { temp, weather } = weatherData.current;
        const description = weather && weather[0] ? weather[0].description : '';
        return (
            <div>
                <h2>Текущая погода:</h2>
                <p>Температура: {temp} °C</p>
                <p>Описание: {description}</p>
            </div>
        );
    } else if (viewMode === "5day") {
        const daily = weatherData.daily.slice(0,5);
        return (
            <div>
                <h2>Прогноз на 5 дней:</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {daily.map((day, index) => {
                        const date = new Date(day.dt * 1000).toLocaleDateString();
                        const { min, max } = day.temp;
                        const description = day.weather[0].description;
                        return (
                            <div
                                key={index}
                                style={{
                                    border: '1px solid #ccc',
                                    margin: '10px',
                                    padding: '10px',
                                    flex: '1 0 150px'
                                }}
                            >
                                <p><strong>{date}</strong></p>
                                <p>Мин: {min} °C</p>
                                <p>Макс: {max} °C</p>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    return null;
}

export default WeatherDisplay;
