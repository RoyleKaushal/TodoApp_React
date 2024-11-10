import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddComponent from "./components/AddComponent/AddComponent";
import { TodoContext } from "./context/TodoContext";
import { TodoDispatchContext } from "./context/TodoDispatchContext";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  finishedTodo,
} from "./actions/todoActions";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, deleteTodo, editTodo, finishedTodo },
    dispatch
  );
  return (
    <>
      <AddComponent addTodo={(text) => actions.addTodo(text)} />
      <TodoList
        editTodo={(id, text) => actions.editTodo(id, text)}
        finishedTodo={(id, isFinished) => actions.finishedTodo(id, isFinished)}
        deleteTodo={(id) => actions.deleteTodo(id)}
      />
    </>
  );
}

export default App;
