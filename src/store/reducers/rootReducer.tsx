import { combineReducers } from '@reduxjs/toolkit';
import { registerReducer } from './registerReducer';
import { userReducer } from './userReducer';
import {globalAppStateReducer} from './globalAppStateReducer'

const rootReducer = combineReducers({
  registerReducer,
  userReducer,
  globalAppStateReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
