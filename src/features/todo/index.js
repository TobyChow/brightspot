import { useState } from 'react';
import { TasksProvider } from './TasksContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import StatusTab from './components/StatusTab';
import Card from '../../components/Card/Card';
import styles from './Todo.module.css';

export default function Todo() {
    const [taskStatus, setTaskStatus] = useState('');

    return (
        <Card moduleStyle={styles.todoContainer}>
            <TasksProvider>
                <StatusTab taskStatus={taskStatus} setTaskStatus={setTaskStatus}/>
                <AddTask />
                <TaskList taskStatus={taskStatus}/>
            </TasksProvider>
        </Card>
    );
}