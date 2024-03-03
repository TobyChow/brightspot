import './App.css';
import { useState, useEffect, Suspense } from 'react';
import Profile from './profile/Profile.js';
import Weather from './weather/Weather.js';
import Todo from './todo/Todo.js';
import { TasksProvider } from './todo/TasksContext.js';
import TaskList from './todo/TaskList/TaskList.js';
import Loading from './components/Loading.js';
const profile = {
    'username': 'Toby Chow',
    'email': 'toe',
    'picture': 'a'
}

function App() {


    return (
        <>
        {/* <Profile {...profile}/> */}
        <Weather/>
        <Todo/>
        </>
    );
}

export default App;
