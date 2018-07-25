import { FETCH_POPULAR_MOVIES } from './actionTypes';

export const fetchPopularMovies = () => dispatch => {
  console.log('fetching');
  fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=46af50cafe8e86626ec6d59ae22ad0a9&language=en-US&page=1'
  )
    .then(res => res.json())
    .then(payload =>
      dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload,
      })
    );
};
