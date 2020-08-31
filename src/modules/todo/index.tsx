import React, {FC, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {todoSelector, fetchTodos} from 'store/reducers/todo';

const Todo: FC = () => {
  const {todos, status} = useSelector(todoSelector);
  const dispatch = useDispatch();
  const onFetchClick = useCallback(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <h1>Request status = {status}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.title}>
            <h2>{todo.title}</h2>
            <p>{todo.message}</p>
          </li>
        ))}
      </ul>
      <button onClick={onFetchClick}>Fetch todos</button>
    </>
  );
};

export default Todo;
