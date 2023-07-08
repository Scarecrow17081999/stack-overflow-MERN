import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  loading: false,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
