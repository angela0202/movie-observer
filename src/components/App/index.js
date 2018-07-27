import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import LoginForm from '../../containers/LoginForm';
import history from '../../helpers/history';

import Main from '../../containers/Main';
import Navigation from '../../containers/Navigation';
import MovieDetails from '../../containers/MovieDetails';

const App = ({ isAuthenticated }) => {
  return (
    <Router history={history}>
      <Fragment>
        {isAuthenticated ? (<Navigation/>) : ''}
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={isAuthenticated}
            component={Main}
          />
          <PrivateRoute
            exact
            path="/movie/:id"
            isAuthenticated={isAuthenticated}
            component={MovieDetails}
          />
          <Route path="/login" render={() => <LoginForm />} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
