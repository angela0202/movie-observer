import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_FAILURE,
  FETCH_FAVORITES_SUCCESS
} from './actionTypes';
import store from '../store';

const apiKey = store.getState().currentUser.password;

const fetchFavoritesRequest = () => ({
  type: FETCH_FAVORITES_REQUEST,
  favoritesLoading: true,
});

const fetchFavoritesSuccess = payload => ({
  type: FETCH_FAVORITES_SUCCESS,
  payload,
  favoritesLoading: false,
});

const fetchFavoritesFailure = err => ({
  type: FETCH_FAVORITES_FAILURE,
  payload: { err },
  favoritesLoading: false,
});

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export const addToFavorites = movieID => dispatch => {
  const movie = {
    id: movieID,
  };
  dispatch({ type: ADD_TO_FAVORITES, payload: movie });
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
};

export const fetchFavorites = (favIds) => dispatch => {
  dispatch(fetchFavoritesRequest());

  return Promise.all(favIds.map(movie => fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`

  ).then(res => res.json())))
    .then(payload => dispatch(fetchFavoritesSuccess(payload)))
    .catch(err => dispatch(fetchFavoritesFailure(err)))
};