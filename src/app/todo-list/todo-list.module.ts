import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { TodoListPresentationComponent } from './list/list-presentation/todo-list-presentation.component';
import { TodoListContainerComponent } from './list/list-container/todo-list-container.component';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './store/tasks.reducer';

@NgModule({
  declarations: [
    TodoListContainerComponent,
    TodoListPresentationComponent,
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('tasks', tasksReducer),
  ],
  exports: [TodoListContainerComponent],
})
export class TodoListModule {}
