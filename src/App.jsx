import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddComponent from "./components/AddComponent/AddComponent";
import { TodoContext } from "./context/TodoContext";
import todoReducers from "./reducers/todoReducers";
import { TodoDispatchContext } from "./context/TodoDispatchContext";
import {
  addTodo,
  editTodo,
  deleteTodo,
  finishedTodo,
} from "./slices/todoSlice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();

  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishedTodo },
    dispatch
  );

  return (
    <>
      <AddComponent addTodo={(data) => actions.addTodo(data)} />
      <TodoList
        deleteTodo={(data) => actions.deleteTodo(data)}
        editTodo={(data) => actions.editTodo(data)}
        finishTodo={(data) => actions.finishedTodo(data)}
      />
    </>
  );
}

export default App;
