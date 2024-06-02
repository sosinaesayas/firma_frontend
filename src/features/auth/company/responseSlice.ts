// responseSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResponseState {
  message: string | null;
  type: "success" | "error" | null;
}

const initialState: ResponseState = {
  message: null,
  type: null,
};

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    setResponseMessage: (
      state,
      action: PayloadAction<{ message: string; type: "success" | "error" }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearResponseMessage: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setResponseMessage, clearResponseMessage } =
  responseSlice.actions;
export default responseSlice.reducer;
