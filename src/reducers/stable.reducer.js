import { SET_STABLE_STATE } from "../actions/stable.action";

const initial_state = {};

export default function stableReducer(state = initial_state, action) {
  switch (action.type) {
    case SET_STABLE_STATE:
      return action.payload;
    default:
      return state;
  }
}
