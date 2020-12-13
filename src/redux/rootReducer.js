import userReducer from "./user/userReducer";
import taskReducer from "./task/taskReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    task: taskReducer, //
    user: userReducer,
});

export default rootReducer;
