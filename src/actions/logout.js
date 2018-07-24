import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const logout = () => dispatch => {
  dispatch(logoutRequest());
  setTimeout(() => {
    dispatch(logoutSuccess());
    localStorage.removeItem('user');
  }, 1000);
};
