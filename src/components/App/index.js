import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import LoginForm from '../../containers/LoginForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" render={() => <div>Home page</div>}/>
          <Route path="/login" render={() => <LoginForm/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
