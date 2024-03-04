export async function getLocations(query) {
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

export async function reverseGeocode(latitude, longitude) {
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