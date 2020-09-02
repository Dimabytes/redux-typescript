import React, {FC, useState, useCallback} from 'react';
import {WithId} from 'models/common/serverArray';
import {Todo} from 'models/todo';
import {IconButton, ListItem, TextareaAutosize, Typography} from '@material-ui/core';
import {Delete, Edit, Save, Sync, Stop} from '@material-ui/icons';

interface Props {
  todo: WithId<Todo>;
}

const TodoItem: FC<Props> = ({todo}: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editableMessage, setEditableMessage] = useState(todo.message);
  const toggleEdit = useCallback(() => {
    if (isEdit) {
      setEditableMessage(todo.message);
    }
    setIsEdit(prev => !prev);
  }, [todo.message, isEdit]);

  const toggleInput = useCallback(e => {
    setEditableMessage(e.target.value);
  }, []);
  return (
    <ListItem>
      <Typography variant="h5">{todo.title}</Typography>
      <TextareaAutosize disabled={!isEdit} value={editableMessage} onChange={toggleInput} />
      <IconButton onClick={toggleEdit}>
        <Edit />
      </IconButton>
      <IconButton>
        <Save />
      </IconButton>
      <IconButton>
        <Delete />
      </IconButton>
      {isEdit && (
        <IconButton>
          <Sync />
        </IconButton>
      )}
    </ListItem>
  );
};

export default TodoItem;
