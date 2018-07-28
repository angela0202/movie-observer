import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_FAILURE, FETCH_MOVIE_DETAILS_FAILURE, FETCH_MOVIE_DETAILS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  favIds: JSON.parse(localStorage.getItem('favorites')) || [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favIds: [...state.favIds, action.payload],
      };
    case FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        favoritesLoading: true
      };
    case FETCH_FAVORITES_SUCCESS:
      return {
        ...state,
        fetchedFavorites: action.payload,
        favoritesLoading: false
      };
    case FETCH_FAVORITES_FAILURE:
      return {
        ...state,
        err: action.payload.err,
        favoritesLoading: false
      };
    default:
      return state;
  }
};
