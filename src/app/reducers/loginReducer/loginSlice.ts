import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";
// import { login } from "../../apiServices/membersservices";

type InitialState = {
  userDetails: any[];
};

const initialState: InitialState = {
  userDetails: JSON.parse(localStorage.getItem("userDetails") || "[]"),
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.userDetails.push({ id: uuid(), ...action.payload });
      localStorage.setItem("userDetails", JSON.stringify(state.userDetails));
    },

    getLogin: (state, action) => {
      debugger
      axios.post('http://localhost:8080/addAlien',action.payload).then(res => console.log(res))
    },
    
  },
  
});

export default loginSlice.reducer;
export const { add, getLogin } = loginSlice.actions;
