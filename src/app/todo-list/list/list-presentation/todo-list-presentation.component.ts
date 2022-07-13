import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-presentation',
  templateUrl: './todo-list-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListPresentationComponent {
  @Input() public todoList: ReadonlyArray<string>;
}
