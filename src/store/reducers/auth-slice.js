import { createSlice } from "@reduxjs/toolkit";
import cookie from "react-cookies";
const user = cookie.load("user");
const initialState = user
  ? {
      isLoggedIn: true,
      user,
      userData: {},
    }
  : { isLoggedIn: false, user: null, userData: {} };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.token;
      cookie.save("user", JSON.stringify(action.payload.token), { path: "/" });
    },
  },
  // reducers: {
  //   setUserData: (state, action) => {
  //     if (!state.userData?._id) {
  //       state.userData = action.payload;
  //     }
  //   },
  // },
});
export default authSlice.reducer;
export const { loginReducer } = authSlice.actions;
