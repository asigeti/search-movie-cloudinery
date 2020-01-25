export const FETCH_MOVIE = 'FETCH_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
const initialState ={};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    //start fetch cards 
    case FETCH_MOVIE:
      return {
        ...state,
        payload
      };
      case DELETE_MOVIE:
        return {
          ...state,
          movie:{}
        }
   
    default:
      return state;
  }
}
