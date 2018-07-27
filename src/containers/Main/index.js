import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Main from '../../components/Main';
import { fetchPopularMovies, fetchMovieGenres, searchMovies } from '../../actions/movieActions';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchMovieGenres();
  }

  handleSearch = (query, page) => {
    !query ? this.props.fetchPopularMovies() :
    this.props.searchMovies(query, page);
  };

  render() {
    return <Main
      popularMovies={this.props.popularMovies}
      genres={this.props.genres}
      genresLoading={this.props.genresLoading}
      moviesLoading={this.props.moviesLoading}
      handleSearch={this.handleSearch}
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
  fetchMovieGenres: () => dispatch(fetchMovieGenres()),
  searchMovies: (query, page) => dispatch(searchMovies(query, page))
});

const formConfiguration = {
  form: 'search',
};


const MainWithForm = reduxForm(formConfiguration)(MainContainer);

export default connect(mapStateToProps, mapDispatchToProps)(MainWithForm);
