import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoDispatchContext } from "../../context/TodoDispatchContext";

function AddComponent() {
  const [newTodo, setNewTodo] = useState("");
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);
  function onAdd() {
    if (newTodo.length < 1) return;
    dispatch({ type: "add-todo", payload: { text: newTodo } });
    setNewTodo("");
  }
  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </>
  );
}

export default AddComponent;
