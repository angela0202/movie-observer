import { FETCH_POPULAR_MOVIES } from '../actions/actionTypes';

const initialState = {
  popularMovies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    default:
      return state
  }
}