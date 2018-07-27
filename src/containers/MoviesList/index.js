import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPopularMovies, fetchMovieGenres } from '../../actions/movieActions';

import MoviesList from '../../components/MoviesList';

class MovieListContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchMovieGenres();
  }

  render() {
    return <MoviesList
      movies={this.props.movies}
      genres={this.props.genres}
      genresLoading={this.props.genresLoading}
      moviesLoading={this.props.moviesLoading}
    />
  }
}

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  genres: state.movieReducer.genres,
  moviesLoading: state.movieReducer.moviesLoading,
  genresLoading: state.movieReducer.genresLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchMovieGenres: () => dispatch(fetchMovieGenres())
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
