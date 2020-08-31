import {Todo} from 'models/todo';
import Status from 'models/common/Status';

export interface TodoState {
  todos: Todo[];
  status: Status;
}

export const initialState: TodoState = {
  todos: [],
  status: Status.Fetching
};
