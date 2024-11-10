import { useContext } from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../../context/TodoContext";
import { TodoDispatchContext } from "../../context/TodoDispatchContext";

function TodoList() {
  
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function onFinished(isFinished, id) {
    dispatch({ type: "update-todo", payload: { id, isFinished } });
  }

  function onDelete(id) {
    dispatch({ type: "delete-todo", payload: { id } });
  }

  function onEdit(text, id) {
    dispatch({ type: "edit-todo", payload: { id, text } });
  }

  return (
    <div>
      {list?.length > 0 &&
        list.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todoData={todo.data}
              finished={todo.isFinished}
              onFinish={(isFinished) => onFinished(isFinished, todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={(text) => onEdit(text, todo.id)}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
