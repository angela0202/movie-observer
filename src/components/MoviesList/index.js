import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

import MovieContainer from '../../containers/Movie';
import styles from './styles';

const MovieList = ({
  movies,
  genres,
  moviesLoading,
  classes,
  fetchPopularMovies,
}) => {
  return !moviesLoading && movies.results ? (
    <div className={classes.moviesContainer}>
      <div className={classes.movies}>
        {movies.results.map((movie, index) => (
          <MovieContainer key={index} movie={movie} genres={genres} />
        ))}
      </div>
      <div>
        {movies.page >= 2 ? (
          <Button onClick={() => fetchPopularMovies(movies.page - 1)} style={{
            color: '#fff',
            background: '#c53434',
            margin: '10px'
          }}>
            Prev
          </Button>
        ) : (
          ''
        )}
        <Button onClick={() => fetchPopularMovies(movies.page + 1)} style={{
          color: '#fff',
          background: '#c53434',
          margin: '10px'
        }}>
          Next
        </Button>
      </div>
    </div>
  ) : (
    <div style={{ fontSize: '40px' }}>Please wait...</div>
  );
};

export default withStyles(styles)(MovieList);
