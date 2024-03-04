import { useEffect, useState, useContext } from 'react';
import SearchBarLocations from '../SearchBarList';
import useDebounce from '../../../../hooks/useDebounce';
import { WeatherContext } from '../../WeatherContext';
import { getLocations } from '../../api/location';
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

    const debounced = useDebounce(inputValue);

    useEffect(() => {
        async function fetchLocations() {
            const locationList = await getLocations(inputValue);
            setLocationList(locationList || []);
        }
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