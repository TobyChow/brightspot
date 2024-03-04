import { useContext, useEffect } from 'react';
import { TasksContext } from '../../TasksContext';
import Task from '../Task';
import styles from './TaskList.module.css';
import { setLocalStorageData } from '../../../../utils';
import { LOCAL_STORAGE_KEY_COORDINATES } from '../../../../utils/constants';

export default function TaskList({ taskStatus }) {
    const tasks = useContext(TasksContext);

    useEffect(() => {
        setLocalStorageData(LOCAL_STORAGE_KEY_COORDINATES, tasks);
    },[tasks]);
    
    const filteredTasks = tasks.filter(task => {
        if (taskStatus === 'completed') {
            return task.isCompleted;
        } else if (taskStatus === 'incompleted') {
            return !task.isCompleted;
        } else {
            return task;
        }
    });
    filteredTasks.sort((a,b) => a.isCompleted - b.isCompleted)

    return (
        <div>
            {filteredTasks.length > 0 ? filteredTasks.map(task => <Task key={task.id} {...task}/>) : <NoTask/>}
        </div>
    );
}

function NoTask() {
    return (
        <div className={styles.noTask}>No Tasks!</div>
    );
}