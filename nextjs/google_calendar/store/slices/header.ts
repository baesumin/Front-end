import { createSlice } from '@reduxjs/toolkit'

const counterSliceType = 'slice/header'

export interface IHeaderState {
  isSideOpen: boolean
}

const initialState: IHeaderState = {
  isSideOpen: true,
}

const headerSlice = createSlice({
  initialState,
  name: counterSliceType,
  reducers: {
    setMenuClick: (state) => {
      state.isSideOpen = !state.isSideOpen
    },
  },
})

export default headerSlice
