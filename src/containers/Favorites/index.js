import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFavorites } from '../../actions/favorites';
import Favorites from '../../components/Favorites';

class FavoritesContainer extends Component {
  render() {
    return <Favorites />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFavorites: favIds => dispatch(fetchFavorites(favIds)),
});

export default connect(
  null,
  mapDispatchToProps
)(FavoritesContainer);
