import { createStore, combineReducers } from "redux";
import { appReducer } from "./reducers";

const reducers = {
  appReducer,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
