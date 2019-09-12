import { Todo } from '../models/todo.model';
import { Actions, ADD_TODO } from '../actions/todo.action';


const storeInitial: Todo[] = [];

export function todoReducer(store = storeInitial, action: Actions): Todo[] {

  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...store, todo]

    default:
      return store;
  }

}
