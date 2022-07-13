import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { TasksFacadeService } from '../../store/tasks-facade.service';
import { TodoListModule } from '../../todo-list.module';

import { TodoListContainerComponent } from './todo-list-container.component';

describe('TodoListContainerComponent', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;
  let tasksFacadeServiceSpy: jasmine.SpyObj<TasksFacadeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListContainerComponent],
      imports: [TodoListModule, StoreModule.forRoot({})],
      providers: [
        {
          provide: TasksFacadeService,
          useValue: jasmine.createSpyObj(
            'TasksFacadeService',
            ['addTaskToList'],
            {
              tasks$: of(['Task 1', 'Task 2']),
            }
          ),
        },
      ],
    }).compileComponents();

    tasksFacadeServiceSpy = TestBed.inject(
      TasksFacadeService
    ) as jasmine.SpyObj<TasksFacadeService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addTaskToList method from TasksFacadeService service when an output is emitted', () => {
    const addTaskComponent: DebugElement = fixture.debugElement.query(
      By.directive(AddTaskComponent)
    );
    const button: DebugElement = addTaskComponent.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(tasksFacadeServiceSpy.addTaskToList).toHaveBeenCalled();
  });

  it('should render the given list by the todoList observable', (done) => {
    component.todoList$.subscribe((tasks) => {
      expect(tasks).toHaveSize(2);
      done();
    });
  });
});
