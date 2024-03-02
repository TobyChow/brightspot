import { useState, useContext, useEffect } from 'react';
import { TasksContext, TasksDispatchContext } from '../TasksContext.js';
import Button from '../../components/Button/Button.js';
import styles from './AddTask.module.css';

let newTaskId;

export default function AddTask({ onAddTask }) {
    const [description, setDescription] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);

    useEffect(() => {
        newTaskId = tasks.length;
    }, []);
    
    function handleAddTask(description) {
        if (description !== '') {
            dispatch({
                type:'add',
                id: ++newTaskId,
                description,
                isCompleted: false,
            })
        }
    }

    return (
        <div className={styles.addTaskContainer}>
            <input
                className={styles.input}
                placeholder="Add task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button 
                customStyle={styles.addButton}
                onClick={() => {
                    setDescription('');
                    handleAddTask(description);
                }}
                text='+'
            />
        </div>
    );
}
