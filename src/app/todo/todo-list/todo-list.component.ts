import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';
import { Todo } from '../../ngrx/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../todo.component.scss']
})
export class TodoListComponent implements OnInit {
  todo: Todo[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(stage =>
      this.todo = stage.todo
    );
  }

}
