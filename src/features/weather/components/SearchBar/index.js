import { useEffect, useState, useContext } from 'react';
import SearchBarLocations from '../SearchBarList';
import useDebounce from '../../../../hooks/useDebounce';
import { WeatherContext } from '../../WeatherContext';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const [locationList, setLocationList] = useState([]);
    const weatherContext = useContext(WeatherContext);
    const { setLocation } = weatherContext;

    function handleInput(inputValue) {
        setInputValue(inputValue);
    }

    function changeLocations(location) {
        setLocation({
            name: location.display_name, 
            coordinates: {
                latitude: location.lat,
                longitude: location.lon
            }
        });
        setInputValue('');
    }

    async function getLocations(query) {
        try {
            const baseUrl = "https://nominatim.openstreetmap.org";
            const queryString = `format=json&accept-language=en-US&q=${query}`;
            const url = `${baseUrl}/search?${queryString}`;
            const response = await fetch(url);
            if (!response.ok) {
                return;
            }

            const locations = await response.json();
            return locations;

        } catch (error) {
            console.log(error);
        }
    }

    const debounced = useDebounce(inputValue);

    async function fetchLocations() {
        const locationList = await getLocations(inputValue);
        setLocationList(locationList || []);
    }

    useEffect(() => {
        fetchLocations();
    }, [debounced]);

    return (
        <div className={styles.container}>
            <input
                value={inputValue}
                onChange={e => handleInput(e.target.value)}
                placeholder="Search location..."
                className={styles.input}
            />
            {inputValue && (
                <SearchBarLocations
                    locations={locationList}
                    changeLocations={changeLocations}
                />
            )}
        </div>
    );
}