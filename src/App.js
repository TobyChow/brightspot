import { Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './features/dashboard';
import Weather from './features/weather';
import Todo from './features/todo/Todo';
import Home from './features/home/Home';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={
                    <Home/>
                }/>
                <Route path='weather' element={<Weather/>}/>
                <Route path='todo' element={<Todo/>}/>
            </Route>
        </Routes>
    );
}
