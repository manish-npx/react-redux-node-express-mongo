import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      console.log(action.payload, "check action payload")
      return { message: action.payload };
    },
    clearMessage: () => {
      console.log('clear Message')
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions;
export default reducer;
