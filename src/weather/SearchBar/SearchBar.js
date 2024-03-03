import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import SearchBarLocations from './SearchBarList';
import styles from './SearchBar.module.css';

export default function SearchBar({ setLocation }) {
    const [inputValue, setInputValue] = useState("");
    const [locations, setLocations] = useState([]);
    const [isFocus, setIsFocus] = useState(false);

    function handleInput(inputValue) {
        setInputValue(inputValue);
        if (!inputValue) return;
    }

    function changeLocations(location) {
        setInputValue('');
        setLocation({
            name: location.display_name, 
            coordinates: {
                latitude: location.lat,
                longitude: location.lon
            }
        })
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
            alert('City not found');
        }
    }

    const debounced = useDebounce(inputValue);

    async function fetchLocations() {
        const locationList = await getLocations(inputValue);
        console.log(locationList);
        setLocations(locationList || []);
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
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
            />
            {inputValue && (
                <SearchBarLocations
                    locations={locations}
                    changeLocations={changeLocations}
                />
            )}
        </div>
    );
}