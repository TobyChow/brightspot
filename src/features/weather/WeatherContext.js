import { createContext, useEffect, useState } from 'react';
import { getLocalStorageData, setLocalStorageData } from '../../utils';
import { LOCAL_STORAGE_KEY_LOCATION } from '../../utils/constants';

export const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
    const [location, setLocation] = useState({name:'', coordinates:{}});
 
    
    useEffect(() => {
        if (getLocalStorageData(LOCAL_STORAGE_KEY_LOCATION)) {
            setLocation(getLocalStorageData(LOCAL_STORAGE_KEY_LOCATION));
            return;
        }
        async function reverseGeocode(latitude, longitude) {
            try {
                const url = `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${latitude}&lon=${longitude}`;
                const response = await fetch(url);
                if (!response.ok) {
                    return;
                }
    
                const data = await response.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
        const getCurrentLocation = async () => {
            async function success(position) {
                const { latitude, longitude } = position.coords;
                const result = await reverseGeocode(latitude, longitude);
                const geocodeDetail = result?.features[0]?.properties?.geocoding;
                let locationName = '';
                if (geocodeDetail) {
                    locationName = `${geocodeDetail.city}, ${geocodeDetail.country}`;
                } else {
                    locationName = 'Current Location';
                }
                setLocation({name: locationName, coordinates:{latitude, longitude }});
                setLocalStorageData(LOCAL_STORAGE_KEY_LOCATION, {name: locationName, coordinates:{latitude, longitude }})
            }
            function error() {
                setLocation({name: 'Toronto', coordinates:{latitude: 43.714023, longitude: -79.365012}});
                setLocalStorageData(LOCAL_STORAGE_KEY_LOCATION, {name: 'Toronto', coordinates:{latitude: 43.714023, longitude: -79.365012}})
            }
            if (!navigator.geolocation) {
                error();
            } else {
                navigator.geolocation.getCurrentPosition(success, error);
            }
        };
        getCurrentLocation();
    }, []);

    const contexts = {
        location,
        setLocation
    }

    return (
        <WeatherContext.Provider value={contexts}>
            {children}
        </WeatherContext.Provider>
    );
}