import axios from "axios";
import { FETCH_MOVIES_LIST } from "./movies-list-reducer";


//this should be at config file and the apikey should be encrypted outside of the project (api call to server to get it)
const basePath = 'http://www.omdbapi.com/?apikey=157f34ed&';


//movie Actions 
export const fetchMoviesListApi = (search) => {
  return dispatch => {

    let path = setApiPath(search, 'fetchMoviesListApi');
    return axios.get(path).then(response => {
      dispatch({
        type: FETCH_MOVIES_LIST,
        result: response.data
      });
    }).catch(error => {
      //add error handling 
      console.log(error)
    });
  };
};







function setApiPath(search, type) {
  if (search.year) {
    //when user search by both for movie title and year 
    return `${basePath}s=${search.userInput.trim()}&y=${search.year}`;
  }
  else {
    //when user search by movie title 
    return `${basePath}s=${search.userInput}`;
  }
}

