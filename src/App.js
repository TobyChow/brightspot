import './App.css';
import { useState, useEffect } from 'react';
import Profile from './profile/Profile.js';
import Weather from './weather/Weather.js';
import Todo from './todo/Todo.js';
import { TasksProvider } from './todo/TasksContext.js';
import TaskList from './todo/TaskList/TaskList.js';

const profile = {
    'username': 'Toby Chow',
    'email': 'toe',
    'picture': 'a'
}

function App() {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const fetchLocation = () => {
            function success(position) {
                const { latitude, longitude } = position.coords;
                setCoordinates({ latitude, longitude });
            }
            function error() {
                setCoordinates({latitude: 43.714023, longitude: -79.365012}); // toronto
            }
            if (!navigator.geolocation) {
                error();
            } else {
                navigator.geolocation.getCurrentPosition(success, error);
            }
        };

        fetchLocation();
    }, []);

    return (
        <>
        {/* <Profile {...profile}/> */}
        {/* <Weather {...coordinates}/> */}
        <Todo/>
        </>
    );
}

export default App;
