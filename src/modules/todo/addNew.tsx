import React, {FC, useCallback, useState} from 'react';
import {fetchTodos} from 'store/reducers/todo';
import {createTodo} from 'services/todo';
import {useDispatch} from 'react-redux';
import {Grid, Input, TextareaAutosize, Button} from '@material-ui/core';
import {Todo} from 'models/todo';
import useStyles from './styles';

const defaultValue: Todo = {
  message: '',
  title: ''
};

const AddNew: FC = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [newTodo, setNewTodo] = useState(defaultValue);

  const onAddClick = useCallback(() => {
    createTodo(newTodo).then(() => {
      dispatch(fetchTodos());
      setNewTodo(defaultValue);
    });
  }, [dispatch, newTodo]);

  const toggleInputTitle = useCallback(e => {
    e.persist();
    setNewTodo(prev => ({...prev, title: e.target.value}));
  }, []);
  const toggleInputMessage = useCallback(e => {
    e.persist();
    setNewTodo(prev => ({...prev, message: e.target.value}));
  }, []);
  return (
    <Grid className={styles.addTodoWrapper} container justify="center">
      <Grid item sm={6}>
        <Grid container spacing={2}>
          <Grid item>
            <Input
              placeholder="Awesome todo title"
              value={newTodo.title}
              onChange={toggleInputTitle}
            />
          </Grid>
          <Grid item sm={12}>
            <TextareaAutosize
              placeholder="Awesome todo text"
              className={styles.todoMessageArea}
              rows={5}
              value={newTodo.message}
              onChange={toggleInputMessage}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={onAddClick}>
              Add new Todo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddNew;
