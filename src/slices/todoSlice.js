import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let todoText = action.payload.text;
      state.todoList.push({
        id: state.todoList.length + 1,
        data: todoText,
        isFinished: false,
      });
    },
    editTodo: (state, action) => {
      let id = action.payload.id;
      let text = action.payload.text;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id == id) {
          return { id: id, data: text, isFinished: todo.isFinished };
        } else {
          return todo;
        }
      });
    },
    deleteTodo: (state, action) => {
      let id = action.payload.id;
      state.todoList = state.todoList.filter((todo) => todo.id != id);
    },
    finishedTodo: (state, action) => {
      let id = action.payload.id;
      let isFinished = action.payload.isFinished;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id == id) {
          todo.isFinished = isFinished;
        }
        return todo;
      });
    },
  },
});

export const { deleteTodo, addTodo, editTodo, finishedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
