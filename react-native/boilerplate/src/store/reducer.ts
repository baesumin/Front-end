import {combineReducers} from 'redux';
import userSlice from '../slices/user';
import otherSlice from '../slices/other';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  otherSlice: otherSlice.reducer,
});

export default rootReducer;
