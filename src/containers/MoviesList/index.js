import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchPopularMovies,
  fetchMovieGenres,
} from '../../actions/movieActions';

import MoviesList from '../../components/MoviesList';
import { addToFavorites } from '../../actions/favorites';

class MovieListContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchMovieGenres();
  }

  onAddToFavorites = movieID => {
    this.props.addToFavorites(movieID);
  };

  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        genres={this.props.genres}
        genresLoading={this.props.genresLoading}
        moviesLoading={this.props.moviesLoading}
        onAddToFavorites={this.onAddToFavorites}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movieReducer.movies,
  genres: state.movieReducer.genres,
  moviesLoading: state.movieReducer.moviesLoading,
  genresLoading: state.movieReducer.genresLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
  addToFavorites: movie => dispatch(addToFavorites(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
