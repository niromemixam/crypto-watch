import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from "redux";
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App";
import "./styles/index.scss";

// REDUX

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
