import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Main from '../../components/Main';
import { fetchPopularMovies, searchMovies } from '../../actions/movieActions';

class MainContainer extends Component {
  handleSearch = (query, page) => {
    !query
      ? this.props.fetchPopularMovies()
      : this.props.searchMovies(query, page);
  };

  render() {
    return <Main handleSearch={this.handleSearch} />;
  }
}

const mapStateToProps = state => ({
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = dispatch => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  searchMovies: (query, page) => dispatch(searchMovies(query, page)),
});

const formConfiguration = {
  form: 'search',
};

const MainWithForm = reduxForm(formConfiguration)(MainContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWithForm);
