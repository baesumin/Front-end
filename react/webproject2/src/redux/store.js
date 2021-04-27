import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './setting';
import userReducer from './user';

export default configureStore({
  reducer: {
    setting: settingReducer,
    user: userReducer
  }
});
