import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Navigation from '../../components/Navigation';
import {logout} from '../../actions/logout'
import { selectCurrentUser } from '../../selectors';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)