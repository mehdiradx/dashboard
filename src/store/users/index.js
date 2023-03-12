/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { status } from 'model';
import { getUsersRequestAsync } from './asyncActions';

const initialState = {
  status: status.IDLE,
  data: [],
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getUsersRequestAsync.pending, state => {
        state.status = status.PENDING;
        state.data = initialState.data;
        state.error = initialState.error;
      })
      .addCase(getUsersRequestAsync.fulfilled, (state, action) => {
        state.status = status.SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(getUsersRequestAsync.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.payload;
      });
  },
});

export const selectUsersData = state => state.users.data;
export const selectUsersError = state => state.users.error;
export const selectUsersStatus = state => state.users.status;

export default usersSlice.reducer;
