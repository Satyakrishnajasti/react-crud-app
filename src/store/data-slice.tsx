import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DataState, User } from "../shared/model";

const initialState: DataState = {
  users: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User[]>) => {
      state.users = [...state.users, ...action.payload];
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.filter(
        (element) => element.name !== action.payload.name
      );
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (element) => element.name == action.payload.name
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = dataSlice.actions;
export default dataSlice.reducer;
