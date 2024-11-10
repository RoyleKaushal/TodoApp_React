import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducers";

const reducer = combineReducers({ todo: todoReducer });
const store = createStore(reducer);

export default store;
