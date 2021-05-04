import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isActivate: true
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    Activate: (state) => {
      state.isActivate = !state.isActivate;
    }
  }
});

export const { login, logout, Activate } = userSlice.actions;

export default userSlice.reducer;
