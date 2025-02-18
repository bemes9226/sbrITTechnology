import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: { value: number }) => {
      state.value += 1;
    },
  },
});
export const { increment } = likeSlice.actions;

export default likeSlice.reducer;
