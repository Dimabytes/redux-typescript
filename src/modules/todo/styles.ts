import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
  todoContainer: {
    minHeight: '100vh'
  },
  mainHeader: {
    fontSize: 50,
    fontWeight: 400
  },
  todoMessageArea: {
    outline: 'none',
    resize: 'none',
    width: '90%',
    padding: theme.spacing(1, 2)
  },
  addTodoWrapper: {
    padding: theme.spacing(2)
  },
}));
