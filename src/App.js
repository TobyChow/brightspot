import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './dashboard/Dashboard';
import Weather from './weather/Weather';
import Todo from './todo/Todo';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Weather/>}/>
                <Route path='weather' element={<Weather/>}/>
                <Route path='todo' element={<Todo/>}/>
            </Route>
        </Routes>
    );
}
