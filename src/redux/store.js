import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import taskReducer from "./task/taskReducer";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
    // composeWithDevTools(applyMiddleware(thunk))
);

export default store;
// exports a component Provider
