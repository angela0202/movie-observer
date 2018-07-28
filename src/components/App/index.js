import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import LoginForm from '../../containers/LoginForm';
import history from '../../helpers/history';

import Main from '../../containers/Main';
import Navigation from '../../containers/Navigation';
import MovieDetails from '../../containers/MovieDetails';
import Favorites from '../../containers/Favorites';

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
          <PrivateRoute
            exact
            path="/favorites"
            isAuthenticated={isAuthenticated}
            component={Favorites}
          />
          <Route path="/login" render={() => <LoginForm />} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
