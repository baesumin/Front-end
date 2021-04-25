import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    curScreen: 0,
    color: '#ffffff'
  },
  reducers: {
    changeScreen: (state, action) => {
      state.curScreen = action.payload;

      if (action.payload === 0) {
        state.color = '#ffffff';
      } else if (action.payload === 1) {
        state.color = '#F7BAC2';
      } else if (action.payload === 2) {
        state.color = '#2AABA7';
      } else {
        state.color = '#4990E2';
      }
    }
  }
});

export const { changeScreen } = settingSlice.actions;

export default settingSlice.reducer;
