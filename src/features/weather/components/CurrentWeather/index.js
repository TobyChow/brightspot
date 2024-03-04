import { useEffect, useState, useContext } from 'react';
import { weatherCodes, getWeatherIcon } from '../../weatherCodes';
import { WeatherContext } from '../../WeatherContext';
import { getWeather } from '../../api/weather';
import AdditionalWeatherDetail from '../AdditionalWeatherDetail';
import styles from '../../../weather/weather.module.css';

export default function CurrentWeather({ showAdditionalDetails=true }) {
    const [weatherData, setWeatherData] = useState(null);
    const weatherContext = useContext(WeatherContext);
    const { location } = weatherContext;
    
    useEffect(() => {
        (async () => {
            const { latitude, longitude } = location.coordinates;
            const weatherData = await getWeather(latitude, longitude);
            setWeatherData(weatherData)
        })();
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
                {showAdditionalDetails && <AdditionalWeatherDetail weatherData={weatherData}/>}
            </>
            )}
        </div>
    );
}