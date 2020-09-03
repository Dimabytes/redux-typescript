import React, {FC} from 'react';
import {Paper, Grid, Typography} from '@material-ui/core';
import List from './List';
import AddNew from './addNew';
import useClasses from './styles';

const Todo: FC = () => {
  const classes = useClasses();
  return (
    <Grid
      className={classes.todoContainer}
      alignItems="center"
      container
      spacing={2}
      justify="center"
    >
      <Grid sm={10} item>
        <Paper>
          <Typography className={classes.mainHeader} align="center" variant="h1">
            Firebase todo list
          </Typography>
          <List />
          <AddNew />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Todo;
