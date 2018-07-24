import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" render={() => <div>Home page</div>}/>
          <Route path="/login" render={() => <div>Login page</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
