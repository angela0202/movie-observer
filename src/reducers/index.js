import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from './loginReducer';
import currentUser from './currentUser';


export default combineReducers({
  form: formReducer,
  loginReducer,
  currentUser
});