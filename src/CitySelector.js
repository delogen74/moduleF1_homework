import React from 'react';

function CitySelector({ cities, selectedCity, onChangeCity }) {
    return (
        <div style={{ margin: '20px 0' }}>
            <label style={{ marginRight: '10px' }}>Выберите город:</label>
            <select
                value={selectedCity.name}
                onChange={(e) => {
                    const city = cities.find(c => c.name === e.target.value);
                    onChangeCity(city);
                }}
            >
                {cities.map((city) => (
                    <option key={city.name} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}

export default CitySelector;
