import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

let store;

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer,
    {
      currentUser : user
    },
    applyMiddleware(thunk));
} else {
  store = createStore(
    rootReducer,
    {
      currentUser : user
    },
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

export default store;
