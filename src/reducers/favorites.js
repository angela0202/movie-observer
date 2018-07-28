import { ADD_TO_FAVORITES } from '../actions/actionTypes';

const initialState = {
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites,  action.payload]
      };
    default:
      return state;
  }
};
