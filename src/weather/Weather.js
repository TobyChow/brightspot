import { useEffect, useState } from 'react';
import { weatherCodes, getWeatherIcon } from './weatherCodes.js';
import SearchBar from './SearchBar/SearchBar.js';
import styles from './weather.module.css';

export default function Weather() {
    
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({name:'', coordinates:{}});

    useEffect(() => {
        const fetchLocation = () => {
            function success(position) {
                const { latitude, longitude } = position.coords;
                setLocation({name: '', coordinates:{latitude, longitude }});
            }
            function error() {
                setLocation({name: 'Toronto', coordinates:{latitude: 43.714023, longitude: -79.365012}});
            }
            if (!navigator.geolocation) {
                error();
            } else {
                navigator.geolocation.getCurrentPosition(success, error);
            }
        };
        fetchLocation();
    }, [])

    useEffect(() => {
        async function getWeather() {
            if (location.coordinates.latitude) {
                try {
                    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.coordinates.latitude}&longitude=${location.coordinates.longitude}&current=temperature_2m,weather_code`;
                    const response = await fetch(url);
                    if (!response.ok) {
                        return;
                    }
        
                    const data = await response.json();
                    setWeatherData(data);
                } catch (error) {
                    console.log(error);//todo 
                }
            }
        }
        getWeather();
    }, [location]);

    return (
        <div className={styles.container}>
            <SearchBar setLocation={setLocation}/>
            <div className='header-3'>
                {location.name || 'Current Location'}
            </div>
            {weatherData && (
                <>
                <img src={getWeatherIcon(weatherData.current.weather_code)} alt='logo'/>
                <div className={styles.temperature}>{weatherData.current.temperature_2m} {weatherData.current_units.temperature_2m}</div>
                <div className='header-3'>{weatherCodes[weatherData.current.weather_code].description}</div>
                </>
            )}
        </div>
    );
};
