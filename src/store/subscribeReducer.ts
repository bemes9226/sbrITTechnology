import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    users: [] as string[],
  },
  reducers: {
    addUsers: (state, action: { payload: string }) => {
      state.users.push(action.payload);
    },
  },
});
export const { addUsers } = subscribeSlice.actions;
export default subscribeSlice.reducer;
