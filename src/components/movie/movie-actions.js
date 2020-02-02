import axios from "axios";
import { FETCH_MOVIE } from "./movie-reducer";


//this should be at config file and the apikey should be encrypted outside of the project (api call to server to get it)
const basePath = 'http://www.omdbapi.com/?apikey=157f34ed&i=';


//movie Action
export const fetchMovieApi = (imdbID) => {
  return dispatch => {

    let path = `${basePath}${imdbID}`
    return axios.get(path).then(response => {
      dispatch({
        type: FETCH_MOVIE,
        movie: response.data
      });
    }).catch(error => {
      //add error handling 
      console.log(error)
    });
  };
};



