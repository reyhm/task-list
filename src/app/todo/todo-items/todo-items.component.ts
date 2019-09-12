import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../ngrx/models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { ToggleTodoAction } from '../../ngrx/actions/todo.action';
import { AppState } from '../../ngrx/reducers';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('textInputSelected', {static: false}) textInputSelected: ElementRef;

  editing: boolean;

  chkField: FormControl;
  textInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.done);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.chkField.valueChanges.subscribe(value => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() =>
      this.textInputSelected.nativeElement.select(), 1
    );
  }

  saveChange() {

  }

}
