import { tasksReducer } from "../TasksContext";

describe('Task reducer handles each action type correctly', () => {
    let state = [
        {id:1, description: 'initial task', isCompleted:true}
    ];

    test('add task', () => {
        const action = {type:'add', id:2, description: 'new task', isCompleted:false}
        state = tasksReducer(state, action);
        expect(state).toEqual([
            {id:1, description: 'initial task', isCompleted:true},
            {id:2, description: 'new task', isCompleted:false}
          ]);
    });

    test('delete task', () => {
        const action = {type:'delete', id:1}
        state = tasksReducer(state, action);
        expect(state).toEqual([
            {id:2, description: 'new task', isCompleted:false}
          ]);
    });

    test('complete task', () => {
        const action = {type:'change_completion', id:2, isCompleted:true}
        state = tasksReducer(state, action);
        expect(state).toEqual([
            {id:2, description: 'new task', isCompleted:true}
          ]);
    });
});