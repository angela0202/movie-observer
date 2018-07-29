import {
  POPULAR_MOVIES_FETCH_REQUEST,
  POPULAR_MOVIES_FETCH_SUCCESS,
  POPULAR_MOVIES_FETCH_FAILURE,
  MOVIE_GENRES_FETCH_FAILURE,
  MOVIE_GENRES_FETCH_REQUEST,
  MOVIE_GENRES_FETCH_SUCCESS,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST
} from './actionTypes';

import store from '../store';

/*const apiKey = '46af50cafe8e86626ec6d59ae22ad0a9';*/
const apiKey = store.getState().currentUser ? store.getState().currentUser.password : '';

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


const searchMoviesRequest = () => ({
  type: SEARCH_FETCH_REQUEST,
  moviesLoading: true,
});

const searchMoviesFetchSuccess = payload => ({
  type: SEARCH_FETCH_SUCCESS,
  payload,
  moviesLoading: false,
});

const searchMoviesFetchFailure = err => ({
  type: SEARCH_FETCH_FAILURE,
  payload: { err },
  moviesLoading: false,
});

const movieDetailsRequest = () => ({
  type: FETCH_MOVIE_DETAILS_REQUEST,
  moviesLoading: true,
});

const movieDetailsFetchSuccess = payload => ({
  type: FETCH_MOVIE_DETAILS_SUCCESS,
  payload,
  moviesLoading: false,
});

const movieDetailsFetchFailure = err => ({
  type: FETCH_MOVIE_DETAILS_FAILURE,
  payload: { err },
  moviesLoading: false,
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

export const searchMovies = (query, page) => dispatch => {
  dispatch(searchMoviesRequest());
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page || 1}`

  )
    .then(handleErrors)
    .then(res => res.json())
    .then(payload => dispatch(searchMoviesFetchSuccess(payload)))
    .catch(err => dispatch(searchMoviesFetchFailure(err)));
};

export const fetchMovieDetails = (id) => dispatch => {
  dispatch(movieDetailsRequest());
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

  )
    .then(handleErrors)
    .then(res => res.json())
    .then(payload => dispatch(movieDetailsFetchSuccess(payload)))
    .catch(err => dispatch(movieDetailsFetchFailure(err)));
};
