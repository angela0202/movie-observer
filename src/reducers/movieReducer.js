import {
  POPULAR_MOVIES_FETCH_FAILURE,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_SUCCESS,
  MOVIE_GENRES_FETCH_FAILURE
} from '../actions/actionTypes';

const initialState = {
  popularMovies: {},
  genres: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POPULAR_MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
      };
    case POPULAR_MOVIES_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload.err,
      };
    case MOVIE_GENRES_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MOVIE_GENRES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload,
      };
    case MOVIE_GENRES_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
