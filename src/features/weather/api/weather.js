export async function getWeather(latitude, longitude) {
    if (latitude && longitude) {
        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,cloud_cover,apparent_temperature,wind_speed_10m,relative_humidity_2m,temperature_2m,weather_code`;
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
}