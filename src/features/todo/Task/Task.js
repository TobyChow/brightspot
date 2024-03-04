import { useContext } from 'react';
import { TasksDispatchContext } from '../TasksContext';
import classNames from 'classnames';
import Button from '../../../components/Button/Button';
import styles from './Task.module.css';

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
            <span className={classNames(styles.description, isCompleted ? styles.completed : '')}>{description}</span>
            <Button 
                customStyle={styles.deleteBtn}
                text='X'
                onClick={() => handleDeleteTask(id)}
            />
        </div>
    );
}