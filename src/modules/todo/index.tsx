import React, {FC, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {todoSelector, fetchTodos} from 'store/reducers/todo';
import {createTodo} from 'services/todo';

const Todo: FC = () => {
  const {todos, status} = useSelector(todoSelector);
  const dispatch = useDispatch();
  const onFetchClick = useCallback(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onAddClick = useCallback(() => {
    createTodo({
      message: 'test1',
      title: 'title1'
    }).then(() => dispatch(fetchTodos()));
  }, [dispatch]);

  return (
    <>
      <h1>Request status = {status}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.message}</p>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onFetchClick}>
        Fetch todos
      </button>
      <button type="button" onClick={onAddClick}>
        Add
      </button>
    </>
  );
};

export default Todo;
