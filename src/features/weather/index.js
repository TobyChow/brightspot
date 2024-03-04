import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
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
