import Status from 'models/common/Status';
import {FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS, TodoActionTypes, TodoState} from './types';

const initialState: TodoState = {
  todos: [],
  status: Status.Fetching
};

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        status: Status.Fetching
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        status: Status.Success
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: Status.Failure
      };
    default:
      return state;
  }
}
