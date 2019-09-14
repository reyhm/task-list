import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';
import { Todo } from '../../ngrx/models/todo.model';
import { filterType } from '../../ngrx/actions/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['../todo.component.scss']
})
export class TodoListComponent implements OnInit {
  todo: Todo[] = [];
  filter: filterType;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(stage => {

      this.todo = stage.todo;
      this.filter = stage.filter;

    });
  }

}
