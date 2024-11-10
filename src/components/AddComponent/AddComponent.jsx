import { useState } from "react";
import { useSelector } from "react-redux";

function AddComponent({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");
  function onAdd() {
    if (newTodo.length < 1) return;
    addTodo(newTodo);
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
