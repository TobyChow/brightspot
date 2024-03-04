import { useState, useContext, useEffect } from 'react';
import { TasksContext, TasksDispatchContext } from '../TasksContext';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './AddTask.module.css';
let newTaskId;

export default function AddTask({ onAddTask }) {
    const [description, setDescription] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    const tasks = useContext(TasksContext);
    
    // Get a unique id for the task
    useEffect(() => {
        newTaskId = tasks.reduce((maxId, curr) => Math.max(maxId, curr.id), 1);
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
            <Input
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
