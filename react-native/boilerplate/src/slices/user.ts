import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isSplashDone: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setIsSplashDone(state, action) {
      state.isSplashDone = action.payload.isSplashDone;
    },
  },
});

export default userSlice;
