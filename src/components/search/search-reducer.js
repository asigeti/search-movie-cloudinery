export const SET_INPUT = 'SET_INPUT';

const initialState ={
}  

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case SET_INPUT:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
