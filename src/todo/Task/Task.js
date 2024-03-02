import { useContext } from 'react';
import { TasksDispatchContext } from '../TasksContext.js';
import styles from './Task.module.css';

import Button from '../../components/Button/Button.js';

export default function Task({ id, description, isCompleted }) {
    const dispatch = useContext(TasksDispatchContext);

    function handleDeleteTask(id) {
        dispatch({
            type:'delete',
            id
        })
    }

    function handleChangeTask(id, isCompleted) {
        dispatch({
            type:'change_completion',
            id,
            isCompleted,
        })
    }

    return (
        <div className={styles.card}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={isCompleted}
                onChange={e => handleChangeTask(id, e.target.checked)}
            />
            <span className={styles.description}>{description}</span>
            <Button 
                customStyle={styles.deleteBtn}
                text='X'
                onClick={() => handleDeleteTask(id)}
            />
        </div>
    );
}