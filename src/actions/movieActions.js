import {
  POPULAR_MOVIES_FETCH_REQUEST,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_FAILURE,
} from './actionTypes';

import store from '../store';

const apiKey = store.getState().currentUser.password;

const popularMoviesRequest = () => ({
  type: POPULAR_MOVIES_FETCH_REQUEST,
  loading: true,
});

const popularMoviesFetchSuccess = payload => ({
  type: POPULAR_MOVIES_FETCH_SUCCESS,
  payload,
});

const popularMoviesFetchFailure = err => ({
  type: POPULAR_MOVIES_FETCH_FAILURE,
  payload: { err },
});

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const fetchPopularMovies = () => dispatch => {
  dispatch(popularMoviesRequest());
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
    .then(handleErrors)
    .then(res => res.json())
    .then(payload => dispatch(popularMoviesFetchSuccess(payload)))
    .catch(err => dispatch(popularMoviesFetchFailure(err)));
};
