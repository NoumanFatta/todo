import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  isLoading: true,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getActiveTodosReducer(state, action) {
      state.isLoading = false;
      state.todos = action.payload;
    },
    createTodoReducer(state, action) {
      state.todos.push(action.payload);
    },
  },
});
export default todoSlice.reducer;
export const { getActiveTodosReducer, createTodoReducer } = todoSlice.actions;
