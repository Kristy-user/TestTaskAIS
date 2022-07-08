import { combineReducers } from '@reduxjs/toolkit';
import { registerReducer } from './registerReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  registerReducer,
  userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
