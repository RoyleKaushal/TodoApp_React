export const addTodo = (newTodo) => ({
  type: "add-todo",
  payload: { text: newTodo },
});

export const finishedTodo = (id, isFinished) => ({
  type: "update-todo",
  payload: { id, isFinished },
});

export const deleteTodo = (id) => ({ type: "delete-todo", payload: { id } });

export const editTodo = (id, text) => ({
  type: "edit-todo",
  payload: { id, text },
});
