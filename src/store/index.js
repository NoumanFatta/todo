import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
