import { useState } from 'react';
import { TasksProvider } from './TasksContext.js';
import AddTask from './AddTask/AddTask.js';
import TaskList from './TaskList/TaskList.js';
import StatusTab from './StatusTab/StatusTab.js';
import './Todo.css';

export default function Todo() {
    const [taskStatus, setTaskStatus] = useState('');

    return (
        <div className='todoContainer'>
            <TasksProvider>
                <StatusTab taskStatus={taskStatus} setTaskStatus={setTaskStatus}/>
                <AddTask />
                <TaskList taskStatus={taskStatus}/>
            </TasksProvider>
        </div>
    );
}