import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the input value', () => {
    spyOn(component.newTaskAdded, 'emit');
    const taskDescription = 'Test task';
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const button: DebugElement = fixture.debugElement.query(By.css('button'));
    input.value = taskDescription;

    input.dispatchEvent(new Event('input'));
    button.triggerEventHandler('click', null);

    expect(component.newTaskAdded.emit).toHaveBeenCalledWith(taskDescription);
  });

  it('should disable the add button when input is empty', () => {
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = 'not empty';
    const button: DebugElement = fixture.debugElement.query(By.css('button'));

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(button.nativeNode.disabled).toBe(false);

    input.value = '';

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.nativeNode.disabled).toBe(true);
  });
});
