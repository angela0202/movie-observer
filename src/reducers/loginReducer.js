import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isLoginSuccess: false,
  isLoginRequesting: false,
  loginError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoginRequesting: action.isLoginRequesting };

    case LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: action.isLoginSuccess };

    case LOGIN_FAILURE:
      return { ...state, loginError: action.loginError };

    default:
      return state;
  }
};
