import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAvatarModalOpen: false,
  isInputModalOpen: false,
  isSidebarModalOpen: false,
  isChannelAddModalOpen: false,
  isChannelAddDropdownOpen: false,
  curTab: '0',
  isChannelTabOpen: false,
  isDMTabOpen: false,
  curTime: '0'
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
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
    ChannelAddDropdownOpen: (state, action) => {
      state.isChannelAddDropdownOpen = action.payload;
    },
    ChannelAddModalOpen: (state, action) => {
      state.isChannelAddModalOpen = action.payload;
    },
    SelectTab: (state, action) => {
      state.curTab = action.payload;
    },
    ChannelTabClick: (state) => {
      state.isChannelTabOpen = !state.isChannelTabOpen;
    },
    DMTabClick: (state) => {
      state.isDMTabOpen = !state.isDMTabOpen;
    },
    SetReset: (state) => {
      Object.assign(state, initialState);
    },
    setCurTime: (state, action) => {
      state.curTime = action.payload;
    }
  }
});

export const {
  InputModalOpen,
  SidebarModalOpen,
  AvatarModalOpen,
  ChannelAddModalOpen,
  ChannelAddDropdownOpen,
  SelectTab,
  ChannelTabClick,
  DMTabClick,
  SetReset,
  setCurTime
} = settingSlice.actions;

export default settingSlice.reducer;
