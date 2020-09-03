import React, {FC, useState, useCallback} from 'react';
import {WithId} from 'models/common/serverArray';
import {Todo} from 'models/todo';
import {IconButton, ListItem, TextareaAutosize, Input, Grid} from '@material-ui/core';
import {Delete, Edit, Save, Close} from '@material-ui/icons';
import {updateTodo, deleteTodo} from 'services/todo';
import {useDispatch} from 'react-redux';
import omit from 'lodash/omit';
import clsx from 'clsx';
import useStyles from './styles';
import {fetchTodos} from '../../store/reducers/todo';

interface Props {
  todo: WithId<Todo>;
}

const TodoItem: FC<Props> = ({todo}: Props) => {
  const styles = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [editableTodo, setEditableTodo] = useState(todo);
  const dispatch = useDispatch();
  const toggleEdit = useCallback(() => {
    if (isEdit) {
      setEditableTodo(todo);
    }
    setIsEdit(prev => !prev);
  }, [todo, isEdit]);

  const toggleSave = useCallback(() => {
    updateTodo(todo.id, omit(editableTodo, ['id'])).then(() => {
      dispatch(fetchTodos());
      setIsEdit(false);
    });
  }, [todo, dispatch, editableTodo]);

  const toggleDelete = useCallback(() => {
    deleteTodo(todo.id).then(() => dispatch(fetchTodos()));
  }, [todo.id, dispatch]);

  const toggleInputTitle = useCallback(e => {
    e.persist();
    setEditableTodo(prev => ({...prev, title: e.target.value}));
  }, []);

  const toggleInputMessage = useCallback(e => {
    e.persist();
    setEditableTodo(prev => ({...prev, message: e.target.value}));
  }, []);
  return (
    <Grid item sm={6}>
      <Grid container spacing={2}>
        <Grid item>
          <Input
            disableUnderline={!isEdit}
            disabled={!isEdit}
            value={editableTodo.title}
            onChange={toggleInputTitle}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={9}>
            <TextareaAutosize
              className={styles.todoMessageArea}
              rows={5}
              disabled={!isEdit}
              value={editableTodo.message}
              onChange={toggleInputMessage}
            />
          </Grid>
          <Grid item sm={3}>
            <IconButton onClick={toggleEdit}>{isEdit ? <Close /> : <Edit />}</IconButton>
            <IconButton onClick={toggleDelete}>
              <Delete />
            </IconButton>
            {isEdit && (
              <IconButton onClick={toggleSave}>
                <Save />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
