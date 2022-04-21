import { SEARCH_TOKEN } from "../actions/search.action";

const initial_state = {};

export default function searchToken(state = initial_state, action) {
  switch (action.type) {
    case SEARCH_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
