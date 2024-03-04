import { createContext, useReducer } from 'react';
import { getLocalStorageData } from '../../utils';
import { LOCAL_STORAGE_KEY_COORDINATES } from '../../utils/constants';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...tasks,
                {
                    id: action.id,
                    description: action.description,
                    isCompleted: false,
                }
            ]
        }
        case 'change_completion': {
            return tasks.map(task => {
                if (action.id === task.id) task.isCompleted = action.isCompleted;
                return task;
            });
        }
        case 'delete': {
            return tasks.filter(task => action.id !== task.id)
        }
        default:
            return tasks;
    }
}

export function TasksProvider({ children }) {
    const initialTasks = getLocalStorageData(LOCAL_STORAGE_KEY_COORDINATES) ?? defaultTasks;
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

const defaultTasks = [{id:1, description:'eat', isCompleted: true}, {id:2, description:'drink', isCompleted: false}];