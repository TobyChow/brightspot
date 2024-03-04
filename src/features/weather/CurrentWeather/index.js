import { useEffect, useState, useContext } from 'react';
import { weatherCodes, getWeatherIcon } from '../weatherCodes';
import styles from '../weather.module.css';
import { WeatherContext } from '../WeatherContext';

export default function CurrentWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const weatherContext = useContext(WeatherContext);
    const { location } = weatherContext;
    
    useEffect(() => {
        async function getWeather() {
            if (location.coordinates.latitude) {
                try {
                    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.coordinates.latitude}&longitude=${location.coordinates.longitude}&current=is_day&current=temperature_2m,weather_code`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        return;
                    }
        
                    const data = await response.json();
                    setWeatherData(data);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getWeather();
    }, [location]);

    return (
        <div className={styles.container}>
            <div className='header-2'>
                {location.name || ''}
            </div>
            {weatherData && (
            <>
                <div className={styles.imgContainer}>
                    <img src={getWeatherIcon(weatherData)} alt='Weather Condition'/>
                </div>
                <div className={styles.temperature}>{weatherData.current.temperature_2m} {weatherData.current_units.temperature_2m}</div>
                <div className='header-2'>{weatherCodes[weatherData.current.weather_code].description}</div>
            </>
            )}
        </div>
    );
}