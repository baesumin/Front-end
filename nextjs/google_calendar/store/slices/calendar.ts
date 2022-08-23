import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

const counterSliceType = 'slice/calendar'

export interface ICalendarState {
  currentMonth: string
  calendarData: {
    dayIndex: number
    arr: {
      content: string
      isContinue: boolean
      endIndex?: number
      index: number
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
        dayIndex: 1,
        arr: [
          {
            index: 1,
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 2,
          },
          {
            index: 2,
            content: '8월 1일 개인 일정',
            isContinue: false,
          },
        ],
      },
      {
        dayIndex: 2,
        arr: [
          {
            index: 1,
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 2,
          },
        ],
      },
      {
        dayIndex: 6,
        arr: [
          {
            index: 1,
            content: '8월 6일~7일 일정',
            isContinue: true,
            endIndex: 7,
          },
        ],
      },
      {
        dayIndex: 7,
        arr: [
          {
            index: 1,
            content: '8월 1일~2일 일정',
            isContinue: true,
            endIndex: 7,
          },
        ],
      },
      {
        dayIndex: 16,
        arr: [
          {
            index: 1,
            content: '8월-10월 반복',
            isContinue: false,
          },
        ],
      },
    ],
    [
      {
        dayIndex: 16,
        arr: [
          {
            index: 1,
            content: '8월-10월 반복',
            isContinue: false,
          },
        ],
      },
    ],
    [
      {
        dayIndex: 16,
        arr: [
          {
            index: 1,
            content: '8월-10월 반복',
            isContinue: false,
          },
        ],
      },
    ],
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
    setCalendarData: (state, action): any => {
      const { monthIndex, dayIndex, content } = action.payload
      state.calendarData[monthIndex - 1].push({
        dayIndex: dayIndex,
        arr: [
          {
            isContinue: false,
            content: content,
            index: Math.random() * 10000,
          },
        ],
      })
      // return {
      //   ...state,
      //   calendarData: [
      //     ...state.calendarData,
      //     state.calendarData[monthIndex - 1].filter((item) => {
      //       if (item.dayIndex === dayIndex) {
      //         console.log(item)

      //         return {
      //           dayIndex: dayIndex,
      //           arr: [
      //             ...item.arr,
      //             {
      //               isContinue: false,
      //               content: content,
      //               index: Math.random() * 10000,
      //             },
      //           ],
      //         }
      //       } else {
      //         return item
      //       }
      //     }),
      //   ],
      // }
    },
  },
})

export default calendarSlice
