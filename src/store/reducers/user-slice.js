import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};
const userSlice = createSlice({
    name: "user",
    initialState,
  });
  
  export const assetActions = userSlice.actions;
  
  export default userSlice.reducer;