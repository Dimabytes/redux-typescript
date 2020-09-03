import React, {FC, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {todoSelector, fetchTodos} from 'store/reducers/todo';
import {Grid, Box} from '@material-ui/core';
import TodoItem from './TodoItem';

const List: FC = () => {
  const {todos} = useSelector(todoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Box p={5}>
      <Grid spacing={2} container>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default List;
