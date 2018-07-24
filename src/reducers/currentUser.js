import {
  LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  currentUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
