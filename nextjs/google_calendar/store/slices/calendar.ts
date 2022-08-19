import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSliceType = 'slice/calendar'

export interface ICalendarState {
  currentMonth: string
  calendarData: {
    index: number
    arr: {
      content: string
      isContinue: boolean
      endIndex?: number
    }[]
  }[][]
}

const initialState: ICalendarState = {
  currentMonth: new Date().toISOString(),
  calendarData: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
      {
        index: 1,
        arr: [
          {
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 2,
          },
          {
            content: '8월 1일 개인 일정',
            isContinue: false,
          },
        ],
      },
      {
        index: 2,
        arr: [
          {
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 2,
          },
        ],
      },
      {
        index: 6,
        arr: [
          {
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 7,
          },
        ],
      },
      {
        index: 7,
        arr: [
          {
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 7,
          },
        ],
      },
    ],
    [],
    [],
    [],
    [],
  ],
}

const calendarSlice = createSlice({
  initialState,
  name: counterSliceType,
  reducers: {
    setCurrentMonth: (state, action: PayloadAction<string>) => {
      state.currentMonth = action.payload
    },
    setCalendarData: (state, action) => {
      const { monthIndex, dayIndex, content } = action.payload
      // state.calendarData[monthIndex].push({ index: dayIndex, content: content })
    },
  },
})

export default calendarSlice
