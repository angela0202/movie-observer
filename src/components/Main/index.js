import React, { Fragment } from 'react';
import { Field } from 'redux-form';
import { CardMedia, Paper, TextField, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import MoviesList from '../../containers/MoviesList';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} placeholder={label} {...input} {...custom} />;

const Main = ({ popularMovies, genres, classes }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <CardMedia
          image="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          style={{ height: '330px' }}
        />
      </header>
      <Paper className={classes.optionsContainer}>
        <Field
          name="search"
          component={renderTextField}
          placeholder="Search movies..."
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
        />
      </Paper>
      <MoviesList />
      <div className={classes.buttonsContainer}>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Main);
