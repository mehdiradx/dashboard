import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleApiCallError } from '../helper';

export const loginRequestAsync = createAsyncThunk('login/loginRequest', async (body, { rejectWithValue }) => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(res => res.json());
    return response;
  } catch (error) {
    return handleApiCallError(error, rejectWithValue);
  }
});
