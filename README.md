# Installation
1. `git clone https://github.com/TobyChow/brightspot.git`

2. `cd brightspot`

3. `npm install`

4. `npm start`

A development server will start at `localhost:3000`

To access site on mobile, use `<your_ip_address>:3000`

# Folder Structure
- `components/` - shared components across the app (ex: buttons, input, card, etc..)

- `features/` - specific feature requirements (ex: profile, todo, weather, etc...)
    - `weather`
        - `api/` - connection to external apis

        - `components/` - specific components to weahter (ex:search bar)

        - `index.js` - entry point for `<Weather/>` component

        - `weatherCodes.js` - helper file to translate weather codes to human-friendly 
        descriptions

        - `WeatherContext.js` - Provider to consolidate weather component state
    - `todo`
        - `__test__` - test cases
        
- `hooks/` - shared custom hooks

- `utils/` - utility functions

    - `constants` - constant strings

    - `index.js` - generic helper functions (ex: get and set 
    data to localstorage)

- `App.css` - global styling

# Feature Design

## Home Page
A simplified view of the Todo and Weather widget is shown here.

The todo widget only shows incompleted tasks.
The weather widget only shows weather for the user's current location.

In the respective `Weather` and `Todo` pages, all details will be shown.

## Profile
`<Profile/>` accepts `username`, `email`, and `picture` as a prop

## Weather 
### Handling User's Location
Use browser's `navigator.geolocation` API to get coordinates of user (if permission is allowed).

Use [nominatim reverse geocode API](https://nominatim.org/release-docs/develop/api/Reverse/) to get user's city name from coordinates.

### Get Weather Information
Use [open-meteo weather API](https://open-meteo.com/en/docs) to get weather information from coordinates

### Design
<img src=./readme/weather.svg>

## Todo
### Add, Delete, Complete Tasks
This is handled by the `tasksReducer` in `TaskContext.js`, using the Context API.

### Storing state
State is managed with the `TasksProvider` in `TaskContext.js`.

The tasks are first retrieved from localstorage, and stored in the `tasks` state.

A default todo is provided is none exist in storage.

### Design
<img src=./readme/todo.svg>

## Testing
`npm run test`

Example of a test is in `features/todo/__test__`, which tests the reducer

## Routing
Routing is handled with React Router in `App.js`
