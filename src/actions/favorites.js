import { ADD_TO_FAVORITES } from './actionTypes';

export const addToFavorites = movieID => dispatch => {
  const movie = {
    id: movieID,
  };
  dispatch({ type: ADD_TO_FAVORITES, payload: movie });
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
};
