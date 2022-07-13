import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Task List] Add Task',
  props<{ task: string }>()
);
