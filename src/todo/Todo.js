import { useState } from 'react';
import { TasksProvider } from './TasksContext';
import AddTask from './AddTask/AddTask';
import TaskList from './TaskList/TaskList';
import StatusTab from './StatusTab/StatusTab';
import styles from './Todo.module.css';

export default function Todo() {
    const [taskStatus, setTaskStatus] = useState('');

    return (
        <div className={styles.todoContainer}>
            <TasksProvider>
                <StatusTab taskStatus={taskStatus} setTaskStatus={setTaskStatus}/>
                <AddTask />
                <TaskList taskStatus={taskStatus}/>
            </TasksProvider>
        </div>
    );
}