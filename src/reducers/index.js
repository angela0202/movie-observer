import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from './loginReducer';

export default combineReducers({
  form: formReducer,
  loginReducer
});