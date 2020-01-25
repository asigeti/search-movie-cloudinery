import { combineReducers } from 'redux';
import movieReducer from '../components/Movies/movie-reducer';
import searchReducer from '../components/search/search-reducer'

//compnents reducers to combine 
export default combineReducers({
  movie: movieReducer,
  search: searchReducer
});
