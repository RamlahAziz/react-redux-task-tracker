import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import taskReducer from "./task/taskReducer";

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
// exports a component Provider
