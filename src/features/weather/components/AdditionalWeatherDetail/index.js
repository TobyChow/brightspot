import Card from '../../../../components/Card';
import styles from './AdditionalWeatherDetail.module.css';

export default function AdditionalWeatherDetail({ weatherData }) {
    return (
        <div className={styles.detailsContainer}>
            <WeatherDetail 
                imgSrc='/icons/weather/thermometer.svg'
                description="Feels Like"
                value={`${weatherData.current.apparent_temperature} ${weatherData.current_units.apparent_temperature}`}
            />
            <WeatherDetail 
                imgSrc='/icons/weather/wind_static.svg'
                description="Wind Speed"
                value={`${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}`}
            />
            <WeatherDetail 
                imgSrc='/icons/weather/humidity_static.svg'
                description="Humidity"
                value={`${weatherData.current.relative_humidity_2m} ${weatherData.current_units.relative_humidity_2m}`}
            />
            <WeatherDetail 
                imgSrc='/icons/weather/cloud.svg'
                description="Cloud Cover"
                value={`${weatherData.current.cloud_cover} ${weatherData.current_units.cloud_cover}`}
            />
        </div>
    );
}

function WeatherDetail({ imgSrc, description, value }) {
    return (
        <Card moduleStyle={styles.card}>
            <div className={styles.detailContainer}>
                <div>
                    <img className={styles.img} src={imgSrc} alt={description}/>
                </div>
                <div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.value}>
                        {value}
                    </div>
                </div>
            </div>
        </Card>
    );
}