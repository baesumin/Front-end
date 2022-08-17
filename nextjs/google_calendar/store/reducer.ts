import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, CombinedState, AnyAction } from "redux";
import calendarSlice, { ICalendarState } from "./slices/calendar";
import counterSlice, { ICounterState } from "./slices/counter";
import headerSlice, { IHeaderState } from "./slices/header";

interface RootStates {
  counter: ICounterState;
  header: IHeaderState;
  calendar: ICalendarState;
}

const rootReducer = (
  state: RootStates | undefined,
  action: AnyAction
): CombinedState<RootStates> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      const combinedReducer = combineReducers({
        counter: counterSlice.reducer,
        header: headerSlice.reducer,
        calendar: calendarSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
