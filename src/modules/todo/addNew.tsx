import React, {FC, useCallback} from 'react';
import {fetchTodos} from 'store/reducers/todo';
import {createTodo} from 'services/todo';
import {useDispatch} from 'react-redux';

const AddNew: FC = () => {
  const dispatch = useDispatch();

  const onAddClick = useCallback(() => {
    createTodo({
      message: 'test1',
      title: 'title1'
    }).then(() => dispatch(fetchTodos()));
  }, [dispatch]);

  return (
    <>
      <button type="button" onClick={onAddClick}>
        Add
      </button>
    </>
  );
};

export default AddNew;
