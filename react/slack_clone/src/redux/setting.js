import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    isAvatarModalOpen: false,
    isInputModalOpen: false,
    isSidebarModalOpen: false
  },
  reducers: {
    InputModalOpen: (state, action) => {
      state.isInputModalOpen = action.payload;
    },
    SidebarModalOpen: (state, action) => {
      state.isSidebarModalOpen = action.payload;
    },
    AvatarModalOpen: (state, action) => {
      state.isAvatarModalOpen = action.payload;
    }
  }
});

export const { InputModalOpen, SidebarModalOpen, AvatarModalOpen } = settingSlice.actions;

export default settingSlice.reducer;
