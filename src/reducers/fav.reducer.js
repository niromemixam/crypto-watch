import {
  DECR_FAV_LENGTH,
  INCR_FAV_LENGTH,
  SET_FAV_LENGTH,
} from "../actions/fav.action";

const initial_state = {};

export default function favReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_FAV_LENGTH:
      return action.payload;
    case INCR_FAV_LENGTH:
      state++;
      return state;
    case DECR_FAV_LENGTH:
      state--;
      return state;

    default:
      return state;
  }
}
