import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import Status from 'models/common/Status';
import {Todo} from 'models/todo';
import {getTodos} from 'services/todo';
import {WithId} from 'models/common/serverArray';
import {formatServerArray} from 'utils/services';
import {initialState, TodoState} from './state';
import {AppThunk, RootState} from '../..';

const contactsSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    startTodoFetching: state => {
      state.status = Status.Fetching;
    },
    successTodoFetching: (state, action: PayloadAction<WithId<Todo>[]>) => {
      state.status = Status.Success;
      state.todos = action.payload;
    },
    failureTodoFetching: state => {
      state.status = Status.Failure;
    }
  }
});

export const {startTodoFetching, successTodoFetching, failureTodoFetching} = contactsSlice.actions;
export const todoSelector = (state: RootState): TodoState => state.todo;

export function fetchTodos(): AppThunk {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startTodoFetching());
      const rawTodos = await getTodos();
      const todos = formatServerArray<Todo>(rawTodos === null ? {} : rawTodos);
      dispatch(successTodoFetching(todos));
    } catch (error) {
      console.log(error)
      dispatch(failureTodoFetching());
    }
  };
}

export default contactsSlice.reducer;
