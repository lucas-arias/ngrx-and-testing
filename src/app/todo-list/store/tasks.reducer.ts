import { createReducer, on } from '@ngrx/store';
import { addTask } from './tasks.actions';

export const initialState: ReadonlyArray<string> = [];

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task])
);
