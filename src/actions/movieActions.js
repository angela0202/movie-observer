import {
  POPULAR_MOVIES_FETCH_REQUEST,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_FAILURE,
  MOVIE_GENRES_FETCH_FAILURE,
  MOVIE_GENRES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_SUCCESS,
} from './actionTypes';

import store from '../store';

const apiKey = store.getState().currentUser.password;

const popularMoviesRequest = () => ({
  type: POPULAR_MOVIES_FETCH_REQUEST,
  moviesLoading: true,
});

const popularMoviesFetchSuccess = payload => ({
  type: POPULAR_MOVIES_FETCH_SUCCESS,
  payload,
  moviesLoading: false,
});

const popularMoviesFetchFailure = err => ({
  type: POPULAR_MOVIES_FETCH_FAILURE,
  payload: { err },
  moviesLoading: false,
});

const movieGenresFetchRequest = () => ({
  type: MOVIE_GENRES_FETCH_REQUEST,
  genresLoading: true,
});

const movieGenresFetchSuccess = payload => ({
  type: MOVIE_GENRES_FETCH_SUCCESS,
  payload,
});

const movieGenresFetchFailure = err => ({
  type: MOVIE_GENRES_FETCH_FAILURE,
  payload: { err },
});

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const fetchPopularMovies = (page) => dispatch => {
  dispatch(popularMoviesRequest());
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page || 1}`
  )
    .then(handleErrors)
    .then(res => res.json())
    .then(payload => dispatch(popularMoviesFetchSuccess(payload)))
    .catch(err => dispatch(popularMoviesFetchFailure(err)));
};

export const fetchMovieGenres = () => dispatch => {
  dispatch(movieGenresFetchRequest());
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  )
    .then(handleErrors)
    .then(res => res.json())
    .then(payload => {
      const genres = payload.genres
        .map(curr => {
          let id = curr.id;
          return {
            [id]: curr.name,
          };
        })
        .reduce((acc, ell) => ({ ...acc, ...ell }), {});
      return dispatch(movieGenresFetchSuccess(genres));
    })
    .catch(err => dispatch(movieGenresFetchFailure(err)));
};
