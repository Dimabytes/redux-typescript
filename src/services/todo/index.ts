import {Todo} from 'models/todo';
import {BaseServerArray} from 'models/common/serverArray';
import {baseGet, basePost, basePut, baseDelete} from '../base.service';

const URL = 'todos.json';

export function createTodo(data: Todo): Promise<void> {
  return basePost<void>(URL, data);
}

export function getTodos(): Promise<BaseServerArray<Todo>> {
  return baseGet<BaseServerArray<Todo>>(URL);
}

export function updateTodo(id: string, data: Todo): Promise<void> {
  return basePut<void>(`/todos/${id}.json`, data);
}

export function deleteTodo(id: string): Promise<void> {
  return baseDelete<void>(`/todos/${id}.json`);
}
