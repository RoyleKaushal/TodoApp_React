import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({deleteTodo,finishTodo,editTodo}) {
  const list = useSelector((state) => state.todo.todoList);

  console.log(list);

  function onFinished(isFinished, id) {
    finishTodo({ id, isFinished });
  }

  function onDelete(id) {
    deleteTodo({ id });
  }

  function onEdit(text, id) {
    editTodo({ id, text });
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
