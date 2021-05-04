import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    isAvatarModalOpen: false,
    isInputModalOpen: false,
    isSidebarModalOpen: false,
    curTab: 0
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
    },
    SelectTab: (state, action) => {
      state.curTab = action.payload;
    }
  }
});

export const {
  InputModalOpen,
  SidebarModalOpen,
  AvatarModalOpen,
  SelectTab
} = settingSlice.actions;

export default settingSlice.reducer;
