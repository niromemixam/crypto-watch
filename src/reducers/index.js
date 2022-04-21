import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";
import searchToken from "./search.reducer";
import favReducer from "./fav.reducer";

export default combineReducers({
    stableReducer,
    listReducer,
    searchToken,
    favReducer
})