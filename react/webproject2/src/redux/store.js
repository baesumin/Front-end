import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './setting';

export default configureStore({
  reducer: {
    setting: settingReducer
  }
});
