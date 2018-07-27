import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieDetails from '../../components/MovieDetails';
import {fetchMovieDetails} from '../../actions/movieActions';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    const movieId = window.location.pathname.slice(8);
    this.props.fetchMovieDetails(movieId);
  }

  render() {
    return <MovieDetails />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: (id) => dispatch(fetchMovieDetails(id))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieDetailsContainer);
