import { Todo } from '../models/todo.model';
import { Actions, ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/todo.action';

const todo1 = new Todo('Test');
todo1.done = true;

const stageInitial: Todo[] = [todo1];

export function todoReducer(state = stageInitial, action: Actions): Todo[] {

  switch (action.type) {

    // Add Todo
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    // Toggle Todo
    case TOGGLE_TODO:
      return state.map(itemEdit => {
        if (itemEdit.id === action.id) {
          return {
            ...itemEdit,
            done: !itemEdit.done
          };
        } else { return itemEdit; }
      });

    // Edit Todo
    case EDIT_TODO:
      return state.map(itemEdit => {
        if (itemEdit.id === action.id) {
          return {
            ...itemEdit,
            text: action.text
          };
        } else { return itemEdit; }
      });

    // Delete Todo
    case DELETE_TODO:
      return state.filter(items =>
        (items.id !== action.id)
      );

    default:
      return state;
  }

}
