import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] Set Filter';

export type filterType = 'all' | 'pending' | 'complete';


export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filter: filterType ) {}
}


export type actions = SetFilterAction;
