import { createAction } from '@reduxjs/toolkit';

export const gotApiError = createAction('ApiError', (error) => {
  return {
    payload: {
      text: error.text,
      date: error.date,
    },
  };
});

export const clearApiError = createAction('ClearApiError');