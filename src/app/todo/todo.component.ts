import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from '../ngrx/actions/todo.action';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx/reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  select: boolean;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.select = false;
  }

  toggleAll() {
    this.select = !this.select;

    const action = new ToggleAllTodoAction(this.select);
    this.store.dispatch(action);
  }

}
