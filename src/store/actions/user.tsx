import { createAction } from '@reduxjs/toolkit';

export const loadingUsers = createAction('LoadingUsers');

export const isLogIn = createAction('IsLogIn');
export const updateUserInfo = createAction('UpdateUserInfo');
