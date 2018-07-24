import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import LoginForm from '../../containers/LoginForm';
import history from '../../helpers/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" render={() => <div>Home page</div>}/>
          <Route path="/login" render={() => <LoginForm/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
