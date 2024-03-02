import { useEffect, useState } from 'react';
import weatherCodes from './weatherCodes.js';

export default function Weather({ latitude, longitude }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function getWeather() {
            try {
                const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m,weather_code';
                const response = await fetch(url);
                if (!response.ok) {
    
                }
    
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.log(error);
            }
        }
        getWeather();
    }, []);

    return (
        <>
            {weatherData && (
                <>
                <div>temperature :{weatherData.current.temperature_2m} {weatherData.current_units.temperature_2m}</div>
                <div>Description :{weatherCodes[weatherData.current.weather_code].description}</div>
                </>
            )}
        </>
    );
};
