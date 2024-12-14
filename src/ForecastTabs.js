import React from 'react';

function ForecastTabs({ viewMode, onChangeView }) {
    return (
        <div style={{ margin: '20px 0' }}>
            <button
                style={{
                    marginRight: '10px',
                    backgroundColor: viewMode === "current" ? '#ccc' : '#eee'
                }}
                onClick={() => onChangeView("current")}
            >
                Сейчас
            </button>
            <button
                style={{
                    backgroundColor: viewMode === "5day" ? '#ccc' : '#eee'
                }}
                onClick={() => onChangeView("5day")}
            >
                5 дней
            </button>
        </div>
    );
}

export default ForecastTabs;
