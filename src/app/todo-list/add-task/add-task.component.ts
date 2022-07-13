import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  public taskDescription: string = '';
  @Output() public newTaskAdded: EventEmitter<string> =
    new EventEmitter<string>();

  public emitTask() {
    this.newTaskAdded.emit(this.taskDescription);
    this.taskDescription = '';
  }
}
