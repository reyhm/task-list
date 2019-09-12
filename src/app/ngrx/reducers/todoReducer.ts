import { Todo } from '../models/todo.model';
import { Actions, ADD_TODO, TOGGLE_TODO } from '../actions/todo.action';

const todo1 = new Todo('Test');
todo1.done = true;

const stageInitial: Todo[] = [todo1];

export function todoReducer(state = stageInitial, action: Actions): Todo[] {

  switch (action.type) {
    case ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case TOGGLE_TODO:
      return state.map(itemEdit => {

        if (itemEdit.id === action.id) {
          return {
            ...itemEdit,
            done: !itemEdit.done
          }
        } else { return itemEdit }

      });

    default:
      return state;
  }

}
