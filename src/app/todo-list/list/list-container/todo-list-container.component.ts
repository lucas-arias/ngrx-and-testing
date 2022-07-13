import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksFacadeService } from '../../store/tasks-facade.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainerComponent {
  public todoList$: Observable<ReadonlyArray<string>> =
    this.tasksFacadeService.tasks$;

  constructor(private tasksFacadeService: TasksFacadeService) {}

  public addTaskToList(task: string) {
    this.tasksFacadeService.addTaskToList(task);
  }
}
