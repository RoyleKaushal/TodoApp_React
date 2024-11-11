import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state,action) => {
                let todoText = action.payload.text;
                state.todoList.push({ id: state.todoList.length + 1, data: todoText, isFinished: false })
            },
            editTodo: (state,action) => {

            },
            deleteTodo: (state,action) => {

            },
            finishedTodo: (state,action) => {

            }
        }
    }
)

export const { deleteTodo, addTodo, editTodo, finishedTodo } = todoSlice.actions;
export default todoSlice.reducer;
