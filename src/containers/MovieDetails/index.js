import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieDetails from '../../components/MovieDetails';
import { fetchMovieDetails } from '../../actions/movieActions';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    const movieId = window.location.pathname.slice(8);
    this.props.fetchMovieDetails(movieId);
  }

  render() {
    return (
      <MovieDetails
        movieDetails={this.props.movieDetails}
        movieDetailsLoading={this.props.movieDetailsLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  movieDetails: state.movieReducer.movieDetails,
  movieDetailsLoading: state.movieReducer.movieDetailsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails: id => dispatch(fetchMovieDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailsContainer);
