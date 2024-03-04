import { useState } from 'react';
import { TasksProvider } from './TasksContext';
import AddTask from './AddTask/AddTask';
import TaskList from './TaskList/TaskList';
import StatusTab from './StatusTab/StatusTab';
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