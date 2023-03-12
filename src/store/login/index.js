/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { status } from 'model';
import { loginRequestAsync } from './asyncActions';

const initialState = {
  data: null,
  error: null,
  status: status.IDLE,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginRequestAsync.pending, state => {
        state.data = null;
        state.error = null;
        state.status = status.PENDING;
      })
      .addCase(loginRequestAsync.fulfilled, (state, action) => {
        if (action.payload.message === 'Invalid credentials') {
          state.data = null;
          state.error = action.payload.message;
          state.status = status.FAILED;
        } else {
          state.data = action.payload;
          state.error = null;
          state.status = status.SUCCEEDED;
        }
      })
      .addCase(loginRequestAsync.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
        state.status = status.FAILED;
      });
  },
});

export const selectLoginData = state => state.login.data;
export const selectLoginError = state => state.login.error;
export const selectLoginStatus = state => state.login.status;

export const { setStatus } = loginSlice.actions;
export default loginSlice.reducer;
