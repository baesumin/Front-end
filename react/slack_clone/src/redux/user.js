import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isActivate: true,
    roomId: null,
    title: '멘션 및 반응'
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
    },
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { login, logout, Activate, enterRoom, setTitle } = userSlice.actions;

export default userSlice.reducer;
