import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Navigation from '../../components/Navigation';
import { logout } from '../../actions/logout'
import { selectCurrentUser } from '../../selectors';
import { reduxForm } from 'redux-form';
import { fetchPopularMovies, searchMovies } from '../../actions/movieActions';

const NavigationContainer = (props) => {
  const handleSearch = (query, page) => {
    !query
      ? props.fetchPopularMovies()
      : props.searchMovies(query, page);
  };

  const onLogout = () => {
    props.logout();
  };

  return <Navigation handleSearch={handleSearch} currentUser={props.currentUser} onLogout={onLogout}/>
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    searchMovies: (query, page) => dispatch(searchMovies(query, page)),
    fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  }
};

const formConfiguration = {
  form: 'search',
};

const NavigationWithForm = reduxForm(formConfiguration)(NavigationContainer);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationWithForm);