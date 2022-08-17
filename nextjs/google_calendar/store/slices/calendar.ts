import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSliceType = "slice/calendar";

export interface ICalendarState {
  currentMonth: string;
}

const initialState: ICalendarState = {
  currentMonth: new Date().toISOString(),
};

const calendarSlice = createSlice({
  initialState,
  name: counterSliceType,
  reducers: {
    setCurrentMonth: (state, action: PayloadAction<string>) => {
      state.currentMonth = action.payload;
    },
  },
});

export default calendarSlice;
