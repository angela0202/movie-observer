import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import LoginForm from '../../containers/LoginForm';
import history from '../../helpers/history';

import A from '../a';

const App = ({ isAuthenticated }) => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={isAuthenticated}
          component={A}
        />
        <Route path="/login" render={() => <LoginForm />} />
      </Switch>
    </Router>
  );
};

export default App;
