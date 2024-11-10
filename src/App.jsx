import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddComponent from "./components/AddComponent/AddComponent";
import { TodoContext } from "./context/TodoContext";
import todoReducers from "./reducers/todoReducers";
import { TodoDispatchContext } from "./context/TodoDispatchContext";

function App() {
  const [list, dispatch] = useReducer(todoReducers, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddComponent />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
