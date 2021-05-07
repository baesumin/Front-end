import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    isAvatarModalOpen: false,
    isInputModalOpen: false,
    isSidebarModalOpen: false,
    isChannelAddModalOpen: false,
    isChannelAddDropdownOpen: false,
    curTab: '0',
    isChannelTabOpen: false,
    isDMTabOpen: false
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
  DMTabClick
} = settingSlice.actions;

export default settingSlice.reducer;
