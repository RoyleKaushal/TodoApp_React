import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../constants/actions";

function todoReducers(state=[], action) {
  if (action.type == ADD_TODO) {
    let todoText = action.payload.text;
    return [
      ...state,
      { id: state.length + 1, data: todoText, isFinished: false },
    ];
  } else if (action.type == EDIT_TODO) {
    let id = action.payload.id;
    let text = action.payload.text;
    let newTodos = state.map((todo) => {
      if (todo.id == id) {
        return { id: id, data: text, isFinished: todo.isFinished };
      } else {
        return todo;
      }
    });
    return newTodos;
  } else if (action.type == DELETE_TODO) {
    let id = action.payload.id;
    const updatedList = state.filter((todo) => todo.id != id);
    return updatedList;
  } else if (action.type == UPDATE_TODO) {
    let id = action.payload.id;
    let isFinished = action.payload.isFinished;
    const updatedList = state.map((todo) => {
      if (todo.id == id) {
        todo.isFinished = isFinished;
      }
      return todo;
    });
    return updatedList;
  } else {
    return state;
  }
}

export default todoReducers;
