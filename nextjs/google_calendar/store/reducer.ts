import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, CombinedState, AnyAction } from "redux";
import counterSlice, { ICounterState } from "./slices/counter";

interface RootStates {
  counter: ICounterState;
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
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
