export const SET_INPUT = 'SET_INPUT';

const initialState ={
  search:{
    userInput:'',
    year:''
  }
}  

export default function(state = initialState, {type, search}) {
  switch (type) {
    case SET_INPUT:
      return {
        ...search
      };
    default:
      return state;
  }
}
