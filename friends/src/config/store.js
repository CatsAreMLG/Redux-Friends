import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { friendsReducer } from "../reducers";

const rootReducer = combineReducers({
  friendsReducer
});

const store = createStore(rootReducer, thunk, logger);

export default store;
