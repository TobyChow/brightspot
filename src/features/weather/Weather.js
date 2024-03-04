import SearchBar from './SearchBar/SearchBar';
import CurrentWeather from './CurrentWeather';
import styles from './weather.module.css';
import { WeatherProvider } from './WeatherContext';

export default function Weather() {
    return (
        <WeatherProvider>
            <div className={styles.container}>
                <SearchBar/>
                <CurrentWeather/>
            </div>
        </WeatherProvider>
    );
};
