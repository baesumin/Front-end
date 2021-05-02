import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    isInputModalOpen: false
  },
  reducers: {
    InputModalOpen: (state, action) => {
      state.isInputModalOpen = action.payload;
    }
  }
});

export const { InputModalOpen } = settingSlice.actions;

export default settingSlice.reducer;
