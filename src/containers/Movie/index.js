import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from '../../components/Movie';
import { addToFavorites, removeFromFavorites } from '../../actions/favorites';

class MovieContainer extends Component {
  onAddToFavorites = movieID => {
    this.props.addToFavorites(movieID);
  };

  onRemoveFromFavorites = movieID => {
    this.props.removeFromFavorites(movieID);
  };

  render() {
    return (
      <Movie
        movie={this.props.movie}
        genres={this.props.genres}
        onAddToFavorites={this.onAddToFavorites}
        isFav={this.props.isFav}
        onRemoveFromFavorites={this.onRemoveFromFavorites}
      />
    );
  }
}

const mapStateToProps = (state, movie) => ({
  moviesLoading: state.movieReducer.moviesLoading,
  genresLoading: state.movieReducer.genresLoading,
  isFav: state.favorites.favIds.includes(movie.movie.id.toString()),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: movieID => dispatch(addToFavorites(movieID)),
  removeFromFavorites: movieID => dispatch(removeFromFavorites(movieID)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
