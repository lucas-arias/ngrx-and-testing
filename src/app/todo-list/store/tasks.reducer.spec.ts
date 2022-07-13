import { AppState } from 'src/app/app.state';
import { addTask } from './tasks.actions';
import { tasksReducer } from './tasks.reducer';

describe('TaskReducer', () => {
  it('should return the new state', () => {
    const initialState: AppState = { tasks: [] };
    let state = tasksReducer(initialState.tasks, addTask({ task: 'Task 1' }));
    state = tasksReducer(state, addTask({ task: 'Task 2' }));

    expect(state).toEqual(['Task 1', 'Task 2']);
  });
});
