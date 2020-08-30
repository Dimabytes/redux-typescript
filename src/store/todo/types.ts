// STATE

import Status from 'models/common/Status';

export interface Todo {
  title: string;
  message: string;
}

export interface TodoState {
  todos: Todo[];
  status: Status;
}

// ACTIONS

export const FETCH_REQUEST = 'todo.FETCH_REQUEST';
export const FETCH_SUCCESS = 'todo.FETCH_SUCCESS';
export const FETCH_FAILURE = 'todo.FETCH_FAILURE';

export interface RequestAction {
  type: typeof FETCH_REQUEST;
}

interface SuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: Todo[];
}

interface FailureAction {
  type: typeof FETCH_FAILURE;
}

export type TodoActionTypes = RequestAction | SuccessAction | FailureAction;
