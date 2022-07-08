import { loadingRegisterList } from '../actions/register';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

interface RegisterState {
  registerList: any[];
  loading: boolean;
}

const initialState: RegisterState = {
  registerList: [],
  loading: false,
};

export const registerReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadingRegisterList, (state, action) => {
    state.registerList = [...action.payload];
  });
});
