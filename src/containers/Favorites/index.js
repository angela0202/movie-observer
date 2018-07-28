import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFavorites } from '../../actions/favorites';
import Favorites from '../../components/Favorites';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.fetchFavorites(this.props.favorites);
  }

  render() {
    return <Favorites favorites={this.props.fetchedFavorites} favoritesLoading={this.props.favoritesLoading}/>;
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favIds,
  fetchedFavorites: state.favorites.fetchedFavorites,
  favoritesLoading: state.favorites.favoritesLoading
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites: favIds => dispatch(fetchFavorites(favIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer);
