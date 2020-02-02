export const FETCH_MOVIES_LIST = 'FETCH_MOVIES_LIST';
const initialState = {};

export default function (state = initialState, { type, result }) {
  switch (type) {
    case FETCH_MOVIES_LIST:
      return {
        ...state,
        ...result
      };
  
    default:
      return state;
  }
}
