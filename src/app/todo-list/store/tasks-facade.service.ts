import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { addTask } from './tasks.actions';
import { selectTasks } from './tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class TasksFacadeService {
  public tasks$: Observable<ReadonlyArray<string>> = this.store.pipe(
    select(selectTasks)
  );

  constructor(private store: Store<AppState>) {}

  public addTaskToList(task: string) {
    this.store.dispatch(addTask({ task }));
  }
}
