import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';

describe('Clicking the add task button adds a task', () => {
    test('add task', () => {
        render(<Todo/>);
        const inputElement = screen.getByPlaceholderText('Add task');
        fireEvent.change(inputElement, { target: { value: 'New Task' } });
        const buttonElement = screen.getByText('+');
        fireEvent.click(buttonElement);
        const newTask = screen.getByText('New Task');
        expect(newTask).toBeInTheDocument();
    })
});