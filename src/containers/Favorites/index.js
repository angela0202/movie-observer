import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFavorites } from '../../actions/favorites';
import Favorites from '../../components/Favorites';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.fetchFavorites(this.props.favorites);
  }

  render() {
    return <Favorites />;
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.favIds,
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites: favIds => dispatch(fetchFavorites(favIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer);
