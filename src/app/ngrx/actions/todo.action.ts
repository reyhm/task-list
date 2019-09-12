import { Action } from '@ngrx/store';



export const ADD_TODO = '[Todo] Add Todo';
export const TOGGLE_TODO = '[Todo] Toggle Todo';


export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleTodoAction {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export type Actions = AddTodoAction |
                      ToggleTodoAction;
