import { useContext, useState } from 'react';
import { TasksContext } from '../TasksContext.js';
import styles from '../TaskList/TaskList.module.css';

export default function StatusTab({ taskStatus, setTaskStatus }) {
    const tasks = useContext(TasksContext);

    const numTotalTasks = tasks.length;
    const numCompletedTasks = tasks.filter(task => task.isCompleted).length;
    const numIncompletedTasks = numTotalTasks - numCompletedTasks;

    function handleStatusTab(status) {
        setTaskStatus(status);
    }

    return (
        <nav>
            <div 
                className={`${styles.tab} ${taskStatus === '' ? styles.active : ''}`} 
                onClick={() => handleStatusTab('')}>
                    All ({numTotalTasks})
            </div>
            <div 
                className={`${styles.tab} ${taskStatus === 'incompleted' ? styles.active : ''}`} 
                onClick={() => handleStatusTab('incompleted')}>
                    Incompleted ({numIncompletedTasks})
            </div>
            <div 
                className={`${styles.tab} ${taskStatus === 'completed' ? styles.active : ''}`} 
                onClick={() => handleStatusTab('completed')}>
                    Completed ({numCompletedTasks})
            </div>
        </nav>
    );
}