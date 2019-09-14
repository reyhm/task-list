import { Component, OnInit } from '@angular/core';
import { filterType, SetFilterAction } from '../../ngrx/actions/filter.action';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/reducers';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html'
})
export class TodoFooterComponent implements OnInit {
  filters: filterType[] = ['all', 'complete', 'pending'];
  currentFilter: filterType;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('filter')
      .subscribe(value =>
        this.currentFilter = value);
  }

  setFilter(value: filterType) {
    const action = new SetFilterAction(value);
    this.store.dispatch(action);
  }

}
