import React, {FC, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {todoSelector, fetchTodos} from 'store/reducers/todo';
import TodoItem from './TodoItem';

const List: FC = () => {
  const {todos} = useSelector(todoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
