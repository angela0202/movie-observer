import React, { Fragment } from 'react';
import { CardMedia, Paper, Button, InputAdornment, TextField } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import {Search} from '@material-ui/icons/';

import styles from './styles';

const Main = ({ popularMovies,genres, classes, moviesLoading, genresLoading }) => {
console.log(moviesLoading);

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
                <Search style={{color: 'fff'}}/>
              </InputAdornment>
            ),
          }}
        />
        {moviesLoading && <div style={{fontSize: '40px', color: 'white'}}>Please wait...</div>}
      </Paper>
      {!moviesLoading && popularMovies.results &&
      <div style={{fontSize: '40px'}}>{
        popularMovies.results.map(movie => (
            <div>
              <p>{movie.title}</p>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
              <ul>
                {
                  movie.genre_ids.map(id => (
                    <li>{genres[id]}</li>
                  ))
                }
              </ul>
            </div>
          )
        )
      }</div>
      }
    </Fragment>
  );
};

export default withStyles(styles)(Main);
