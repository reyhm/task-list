import { actions, filterType, SET_FILTER } from '../actions/filter.action';


const filterInit: filterType = 'todo';

export function filterReducer(stage = filterInit, action: actions): filterType {
  switch (action.type) {

    // Set Filter
    case SET_FILTER:
      return action.filter;

    // Default
    default:
      return stage;

  }
}
