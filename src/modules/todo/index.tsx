import React, {FC} from 'react';
import {Paper, Grid} from '@material-ui/core';
import List from './List';

const Todo: FC = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid sm={6} item>
        <Paper>
          <List />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Todo;
