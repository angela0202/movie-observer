import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_FAILURE,
  REMOVE_FROM_FAVORITES
} from '../actions/actionTypes';

const initialState = {
  favIds: JSON.parse(localStorage.getItem('favorites')) || [],
  favoritesLoading: false,
  fetchedFavorites: null
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
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favIds: state.favIds.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};
