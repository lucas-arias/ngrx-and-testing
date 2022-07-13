import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { TodoListModule } from './todo-list/todo-list.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [TodoListModule, StoreModule.forRoot({})],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
