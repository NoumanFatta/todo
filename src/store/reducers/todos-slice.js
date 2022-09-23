import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  isLoading: true,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getActiveTodosReducer(state, aciton) {
      state.isLoading = false;
      state.todos = aciton.payload;
    },
  },
});
export default todoSlice.reducer;
export const { getActiveTodosReducer } = todoSlice.actions;
