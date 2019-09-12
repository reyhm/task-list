import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';
import { AddTodoAction } from '../../ngrx/actions/todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    const action = new AddTodoAction(this.txtInput.value);
    this.store.dispatch(action);

    this.txtInput.setValue('');
  }

}
