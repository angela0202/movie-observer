import { LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  logoutRequesting: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return { ...state, logoutRequesting: true };
    }
    case LOGOUT_SUCCESS: {
      return { ...state, logoutRequesting: false };
    }
  }
  return state;
};
