import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE
} from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
    case LOGIN_FAILURE:
      return null;
    default:
      return state;
  }
};
