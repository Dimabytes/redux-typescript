import {WithId} from 'models/common/serverArray';
import {Todo} from 'models/todo';
import Status from 'models/common/Status';

export interface TodoState {
  todos: WithId<Todo>[];
  status: Status;
}

export const initialState: TodoState = {
  todos: [],
  status: Status.Fetching
};
