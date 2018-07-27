import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieDetails from '../../components/MovieDetails';
import {fetchMovieDetails} from '../../actions/movieActions';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails();
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
