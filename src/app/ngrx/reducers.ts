import { Todo } from './models/todo.model';
import { filterType } from './actions/filter.action';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './reducers/todo.reducer';
import { filterReducer } from './reducers/filter.reducer';


export interface AppState {
  todo: Todo[];
  filter: filterType;
}

export const appReducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
  filter: filterReducer
}
