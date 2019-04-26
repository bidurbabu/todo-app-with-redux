import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import sortFilter from "./sortFilter";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter, sortFilter });
