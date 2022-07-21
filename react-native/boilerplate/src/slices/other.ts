import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  othersState: '',
};
const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    setOthersState(state, action) {
      state.othersState = action.payload.othersState;
    },
  },
});

export default otherSlice;
