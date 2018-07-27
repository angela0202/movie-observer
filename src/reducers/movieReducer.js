import {
  POPULAR_MOVIES_FETCH_FAILURE,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_SUCCESS,
  MOVIE_GENRES_FETCH_FAILURE,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_FAILURE,
  SEARCH_FETCH_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  popularMovies: {},
  genres: {},
  moviesLoading: false,
  genresLoading: false,
  searchedMovies: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_FETCH_REQUEST:
      return {
        ...state,
        moviesLoading: action.moviesLoading,
      };
    case POPULAR_MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        moviesLoading: action.moviesLoading,
        popularMovies: action.payload,
      };
    case POPULAR_MOVIES_FETCH_FAILURE:
      return {
        ...state,
        moviesLoading: action.moviesLoading,
        err: action.payload.err,
      };
    case MOVIE_GENRES_FETCH_REQUEST:
      return {
        ...state,
        genresLoading: true,
      };
    case MOVIE_GENRES_FETCH_SUCCESS:
      return {
        ...state,
        genresLoading: false,
        genres: action.payload,
      };
    case MOVIE_GENRES_FETCH_FAILURE:
      return {
        ...state,
        genresLoading: false,
        err: action.payload.err,
      };
    case SEARCH_FETCH_REQUEST:
      return {
        ...state,
      };
    case SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    case SEARCH_FETCH_FAILURE:
      return {
        ...state,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
