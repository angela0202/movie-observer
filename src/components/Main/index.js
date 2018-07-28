import React from 'react';
import { Field } from 'redux-form';
import { Paper, TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import MoviesList from '../../containers/MoviesList';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} placeholder={label} {...input} {...custom} />;

const Main = ({ popularMovies, genres, classes, handleSearch }) => {
  return (
    <div style={{
      background:
      'linear-gradient(to bottom, rgba(0, 0, 0, .5) 0%, ' +
      'rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), ' +
      `url("http://thewaycom.com.br/novosite/wp-content/uploads/2016/12/audiovisual.jpg")` +
      'no-repeat center center fixed',
      backgroundSize: 'cover',
    }}>

      <MoviesList />
    </div>
  );
};

export default withStyles(styles)(Main);
