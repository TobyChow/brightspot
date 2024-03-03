export const weatherCodes = {
    0: {
      description: "Clear Sky",
      icon: "clear",
    },
    1: {
      description: "Mostly Clear",
      icon: "clear",
    },
    2: {
      description: "Partly Cloudy",
      icon: "partly-cloudy",
    },
    3: {
      description: "Overcast",
      icon: "overcast",
    },
    45: {
      description: "Fog",
      icon: "fog",
    },
    48: {
      description: "Depositing Rime Fog",
      icon: "fog",
    },
    51: {
      description: "Light Drizzle",
      icon: "drizzle",
    },
    53: {
      description: "Moderate Drizzle",
      icon: "drizzle",
    },
    55: {
      description: "Heavy Drizzle",
      icon: "drizzle",
    },
    56: {
      description: "Light Freezing Drizzle",
      icon: "drizzle",
    },
    57: {
      description: "Heavy Freezing Drizzle",
      icon: "drizzle",
    },
    61: {
      description: "Light Rain",
      icon: "rain",
    },
    63: {
      description: "Moderate Rain",
      icon: "rain",
    },
    65: {
      description: "Heavy Rain",
      icon: "rain",
    },
    66: {
      description: "Light Freezing Rain",
      icon: "rain",
    },
    67: {
      description: "Heavy Freezing Rain",
      icon: "rain",
    },
    71: {
      description: "Light Snow",
      icon: "snow",
    },
    73: {
      description: "Moderate Snow",
      icon: "snow",
    },
    75: {
      description: "Heavy Snow",
      icon: "snow",
    },
    77: {
      description: "Snow Grains",
      icon: "sleet",
    },
    80: {
      description: "Light Rain Showers",
      icon: "rain",
    },
    81: {
      description: "Moderate Rain Showers",
      icon: "rain",
    },
    82: {
      description: "Heavy Rain Showers",
      icon: "rain",
    },
    85: {
      description: "Light Snow Showers",
      icon: "snow",
    },
    86: {
      description: "Heavy Snow Showers",
      icon: "snow",
    },
    95: {
      description: "Thunderstorm",
      icon: "thunderstorms-rain",
    },
    96: {
      description: "Thunderstorm with Light Hail",
      icon: "thunderstorms-snow",
    },
    99: {
      description: "Thunderstorm with Heavy Hail",
      icon: "thunderstorms-snow",
    },
};
export function getWeatherIcon(weatherData) {
    const weatherCode = weatherData.current.weather_code;
    let iconName = weatherCodes[weatherCode].icon;
    // some weather conditions have a day or night icon
    if (weatherCode < 50) {
        iconName += weatherData.current.is_day ? '-day' : '-night';
    }
    return `/icons/${iconName}.svg`;
}