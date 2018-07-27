import {
  POPULAR_MOVIES_FETCH_FAILURE,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_SUCCESS,
  MOVIE_GENRES_FETCH_FAILURE,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_FAILURE,
  SEARCH_FETCH_SUCCESS,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  movies: {},
  genres: {},
  moviesLoading: false,
  genresLoading: false,
  movieDetails: null
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
        movies: action.payload,
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
        movies: action.payload,
      };
    case SEARCH_FETCH_FAILURE:
      return {
        ...state,
        err: action.payload.err,
      };
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
      };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        err: action.payload.err,
      };
    default:
      return state;
  }
};
