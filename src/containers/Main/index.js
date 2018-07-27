import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Main from '../../components/Main';
import { fetchPopularMovies, fetchMovieGenres } from '../../actions/movieActions';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchMovieGenres();
  }

  render() {
    return <Main
      popularMovies={this.props.popularMovies}
      genres={this.props.genres}
      genresLoading={this.props.genresLoading}
      moviesLoading={this.props.moviesLoading}
    />
  }
}

const mapStateToProps = (state) => ({
  popularMovies: state.movieReducer.popularMovies,
  genres: state.movieReducer.genres,
  moviesLoading: state.movieReducer.moviesLoading,
  genresLoading: state.movieReducer.genresLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchMovieGenres: () => dispatch(fetchMovieGenres())
});

const formConfiguration = {
  form: 'search',
};


const MainWithForm = reduxForm(formConfiguration)(MainContainer);

export default connect(mapStateToProps, mapDispatchToProps)(MainWithForm);
