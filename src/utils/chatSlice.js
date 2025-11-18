import { createSlice } from "@reduxjs/toolkit";
import { MESSAGE_POP_COUNT, MESSAGE_SHOW_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(MESSAGE_SHOW_COUNT, MESSAGE_POP_COUNT);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
