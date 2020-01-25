import axios from "axios";
import { FETCH_MOVIE, DELETE_MOVIE } from "./movie-reducer";


//this should be at config file and the apikey should be encrypted outside of the project (api call to server to get it)
const basePath = 'http://www.omdbapi.com/?apikey=157f34ed&t=';


//movie Actions 
export const fetchMoviesApi = (userInput) => {
  return dispatch => {
    //the assamption is that between movie title and year the user will use comma to seperate them 
    //example search: "matrix, 1981"
    let splitUserInput = userInput.split(',');
    //build the path according to the user search 
    let path = setApiPath(splitUserInput, path, userInput);
    return axios.get(path).then(response => {
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      });
    }).catch(error=>{
      //add error handling 
      console.log(error)
    });
  };
};
export const deletehMovie = () => {
  return {
    type: DELETE_MOVIE,
    payload: {}
  }
}

function setApiPath(splitUserInput, path, userInput) {
  if (splitUserInput.length > 1 && splitUserInput[1] !== "") {
    //when user search by both for movie title and year 
    return `${basePath}${splitUserInput[0].trim()}&y=${splitUserInput[1].trim()}`;
  }
  else {
    //when user search by movie title 
    return `${basePath}${userInput}`;
  }
}

