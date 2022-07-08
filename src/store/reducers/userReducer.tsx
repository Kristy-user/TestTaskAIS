import { createReducer } from '@reduxjs/toolkit';
import { loadingUsers } from 'store/actions/user';
import { User } from 'types/types';
import { isLogIn, updateUserInfo } from '../actions/user';

export interface UserState {
  user: User;
  loading: false;
}

const initialState: UserState = {
  user: {},
  loading: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadingUsers, (state, action) => {
      state.user = action.payload;
    })
    .addCase(isLogIn, (state, action) => {
      state.user.isLoggedIn = action.payload;
    })
    .addCase(updateUserInfo, (state, action) => {
      state.user = action.payload;
    });
});
