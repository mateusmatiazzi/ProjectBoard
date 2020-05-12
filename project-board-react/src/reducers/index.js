import {combineReducers} from "redux";
import ErrorsReducer from "./ErrorsReducer";
import projectTaskReducer from "./projectTaskReducer";

export default combineReducers ({
    //
    errors: ErrorsReducer,
    project_task: projectTaskReducer
});