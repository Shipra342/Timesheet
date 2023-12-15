import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userInfo: any[];
};

const initialState: InitialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo") || "[]"),
};

const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.userInfo.push({...action.payload });
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});

export default adminSlice.reducer;
export const { add } = adminSlice.actions;
