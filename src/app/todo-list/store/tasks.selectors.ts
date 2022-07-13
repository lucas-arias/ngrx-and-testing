import { createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectTasks = createFeatureSelector<
  ReadonlyArray<string>
>('tasks');
