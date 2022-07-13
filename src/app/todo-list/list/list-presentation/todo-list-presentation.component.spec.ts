import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPresentationComponent } from './todo-list-presentation.component';

describe('TodoListPresentationComponent', () => {
  let component: TodoListPresentationComponent;
  let fixture: ComponentFixture<TodoListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListPresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListPresentationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 li items', () => {
    component.todoList = ['Task 1', 'Task 2', 'Task 3'];
    fixture.detectChanges();
    const listOfLiElements: Array<HTMLElement> =
      fixture.nativeElement.querySelectorAll('li');
    expect(listOfLiElements).toHaveSize(3);
    expect(listOfLiElements[0].innerText).toContain('Task 1');
    expect(listOfLiElements[1].innerText).toContain('Task 2');
    expect(listOfLiElements[2].innerText).toContain('Task 3');
  });

  it('should render 1 li item', () => {
    component.todoList = ['Task 1'];
    fixture.detectChanges();
    const listOfLiElements: Array<HTMLElement> =
      fixture.nativeElement.querySelectorAll('li');
    expect(listOfLiElements).toHaveSize(1);
    expect(listOfLiElements[0].innerText).toContain('Task 1');
  });

  it("shouldn't render a single li item", () => {
    component.todoList = [];
    fixture.detectChanges();
    const listOfLiElements: Array<HTMLElement> =
      fixture.nativeElement.querySelectorAll('li');
    expect(listOfLiElements).toHaveSize(0);
  });
});
