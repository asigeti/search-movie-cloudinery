
import { SET_INPUT } from "./search-reducer";

//search Actions 
export const setUserInputToState = (search) => {
  return {
    type: SET_INPUT,
    search: search
  };
};




