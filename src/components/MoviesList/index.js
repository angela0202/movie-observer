import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Movie from '../Movie';
import styles from './styles';

const MovieList = ({ movies, genres, moviesLoading, classes }) => {
  return (
    (!moviesLoading && movies.results) ? (

        <div className={classes.moviesContainer}>
          <div className={classes.movies}>
            {movies.results.map((movie, index) => (
              <Movie key={index} movie={movie} genres={genres} />
            ))}
          </div>
        </div>

    ) : (
      <div style={{ fontSize: '40px', color: 'white' }}>Please wait...</div>
    )

  )

};

export default withStyles(styles)(MovieList);
