import { useContext } from 'react';
import { TasksContext } from '../TasksContext.js';
import Task from '../Task/Task.js';

export default function TaskList({ taskStatus }) {
    const tasks = useContext(TasksContext);
    const filteredTasks = tasks.filter(task => {
        if (taskStatus === 'completed') {
            return task.isCompleted;
        } else if (taskStatus === 'incompleted') {
            return !task.isCompleted;
        } else {
            return task;
        }
    });

    return (
        <div>
            {filteredTasks.map(task => <Task key={task.id} {...task}/>)}
        </div>
    );
}