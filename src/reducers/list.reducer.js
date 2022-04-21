import { SET_LIST_DISPLAY } from "../actions/list.action";

const initial_state = {};

export default function listReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return action.payload;
    default:
      return state;
  }
}

