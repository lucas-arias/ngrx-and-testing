import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TasksFacadeService } from './tasks-facade.service';
import { addTask } from './tasks.actions';

describe('TasksFacadeService', () => {
  let service: TasksFacadeService;
  let store: MockStore;
  const initialState = { tasks: [] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(TasksFacadeService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch add task action', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    service.addTaskToList('Task 1');
    service.addTaskToList('Task 2');

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy).toHaveBeenCalledWith(addTask({ task: 'Task 1' }));
    expect(dispatchSpy).toHaveBeenCalledWith(addTask({ task: 'Task 2' }));
  });
});
