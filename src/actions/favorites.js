import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_FAILURE,
  FETCH_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES
} from './actionTypes';
import store from '../store';

/*const apiKey = 46af50cafe8e86626ec6d59ae22ad0a9*/
const apiKey = store.getState().currentUser ? store.getState().currentUser.password : '';


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

export const addToFavorites = movieID => dispatch => {
  const movie = movieID.toString();

  dispatch({ type: ADD_TO_FAVORITES, payload: movie });
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
};

export const removeFromFavorites = movieID => dispatch => {
  const movie = movieID.toString();

  dispatch({ type: REMOVE_FROM_FAVORITES, payload: movie });
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const newFavorites = favorites.filter(id => id !== movie);

  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};

export const fetchFavorites = (favIds) => dispatch => {
  dispatch(fetchFavoritesRequest());
  return Promise.all(favIds.map(movie => fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}&language=en-US`

  ).then(res => res.json())))
    .then(payload => dispatch(fetchFavoritesSuccess(payload)))
    .catch(err => dispatch(fetchFavoritesFailure(err)))
};