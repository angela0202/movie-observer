import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

const loginRequest = (user, isLoginRequesting) => ({
  type: LOGIN_REQUEST,
  payload: user,
  isLoginRequesting,
});
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });

const loginFailure = loginError => ({
  type: LOGIN_FAILURE,
  loginError,
});

const loginProcess = (user, isError) => {
  setTimeout(() => {
    if (user.username && user.password) {
      return isError(null);
    } else {
      return isError(new Error('Login Failed'));
    }
  }, 1000);
};

export const login = (username, password) => {
  const user = {
    id: 1,
    username,
    password,
  };

  return dispatch => {
    dispatch(loginRequest(user, true));
    dispatch(loginSuccess(user, false));
    dispatch(loginFailure(null));

    loginProcess(user, error => {
      console.log('err', error);
      dispatch(loginRequest(user, false));
      if (!error) {
        dispatch(loginSuccess(user, true));
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        dispatch(loginFailure(error));
      }
    });
  };
};
