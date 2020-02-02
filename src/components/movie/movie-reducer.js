export const FETCH_MOVIE = 'FETCH_MOVIE';
const initialState = {};

export default function (state = initialState, { type, movie }) {
  switch (type) {
    //start fetch cards 
    case FETCH_MOVIE:
      return {
        ...state,
        ...movie
      };
    default:
      return state;
  }
}
