import { createReducer } from '@reduxjs/toolkit';
import { User } from '../../types/types';
import { isLogIn, updateUserInfo, logOut} from '../actions/user';

export interface UserState {
  user:  Partial<User>;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: {},
  isLoggedIn: false
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(isLogIn, (state, { payload }) => {
        state.isLoggedIn = payload;
    })
    .addCase(updateUserInfo, (state, { payload }) => {
       if (payload) {
        state.user = { ...payload };
      }
    })
    .addCase(logOut, (state, action) => {
        state.isLoggedIn = false;
        state.user = {};
    })
});
