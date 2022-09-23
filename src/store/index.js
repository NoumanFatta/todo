import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth-slice";
import todosSlice from "./reducers/todos-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todosSlice
  },
});

export default store;
