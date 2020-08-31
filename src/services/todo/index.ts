import {Todo} from 'models/todo';
import {BaseServerArray} from 'models/common/serverArray';
import {baseGet, basePost} from '../base.service';

const URL = 'todo.json';

export function createTodo(data: Todo): Promise<void> {
  return basePost<void>(URL, data);
}

export function getTodos(): Promise<BaseServerArray<Todo>> {
  return baseGet<BaseServerArray<Todo>>(URL);
}
