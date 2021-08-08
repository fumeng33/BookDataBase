import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer";
import state from "./state";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

export default createStore(
  rootReducer,
  state,
  composeEnhancer(applyMiddleware(thunk))
);