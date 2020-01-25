
import { SET_INPUT } from "./search-reducer";

//search Actions 
export const setUserInputToState = (userInput) => {
  return {
    type: SET_INPUT,
    payload: userInput
  };
};




