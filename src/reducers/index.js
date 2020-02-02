import { combineReducers } from 'redux';
import moviesListReducer from '../components/movies-list/movies-list-reducer';
import searchReducer from '../components/search/search-reducer'
import movieReducer from '../components/movie/movie-reducer'

//compnents reducers to combine 
export default combineReducers({
  moviesList: moviesListReducer,
  search: searchReducer,
  movie: movieReducer
});
