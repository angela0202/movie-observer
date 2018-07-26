import React, { Fragment } from 'react';
import {
  CardMedia,
  Paper,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  Typography,
  List,
  Button,
  Chip
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons/';
import { Link } from 'react-router-dom';

import styles from './styles';
import MoviesList from '../../containers/MoviesList';

const Main = ({ popularMovies, genres, classes, moviesLoading }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <CardMedia
          image="https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          style={{ height: '330px' }}
        />
      </header>
      <Paper className={classes.optionsContainer}>
        <TextField
          id="input-with-icon-textfield"
          className={classes.search}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'fff' }} />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
      <MoviesList/>
      <div className={classes.buttonsContainer}>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Main);
