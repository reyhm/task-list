import { Action } from '@ngrx/store';



export const ADD_TODO        = '[Todo] Add Todo';
export const TOGGLE_ALL_TODO = '[Todo] Select All Todo';
export const TOGGLE_TODO     = '[Todo] Toggle Todo';
export const EDIT_TODO       = '[Todo] Editar Todo';
export const DELETE_TODO     = '[Todo] Delete Todo';


export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public done: boolean) {}
}

export class ToggleTodoAction {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class EditTodoAction {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction {
  readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

export type Actions = AddTodoAction       |
                      ToggleAllTodoAction |
                      ToggleTodoAction    |
                      EditTodoAction      |
                      DeleteTodoAction;
