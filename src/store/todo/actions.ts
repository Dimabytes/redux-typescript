import {ThunkDispatch} from 'redux-thunk';
import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  Todo,
  TodoActionTypes,
  TodoState
} from './types';

type TodoThunkDispatch = ThunkDispatch<TodoState, undefined, TodoActionTypes>;

const fetchRequest = (): TodoActionTypes => ({
  type: FETCH_REQUEST
});

const fetchFailure = (): TodoActionTypes => ({
  type: FETCH_FAILURE
});

const fetchSuccess = (todos: Todo[]): TodoActionTypes => ({
  type: FETCH_SUCCESS,
  payload: todos
});

export const fetchTodos = () => (dispatch: TodoThunkDispatch): TodoActionTypes => {
  dispatch(fetchRequest());
  return dispatch(
    fetchSuccess([
      {
        message: '1234',
        title: '1234'
      }
    ])
  );
};
