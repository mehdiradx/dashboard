import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleApiCallError } from '../helper';

export const getUsersRequestAsync = createAsyncThunk('users/getUsersRequest', async (body, { rejectWithValue }) => {
  const { query, perPage: limit, page } = body;
  const skip = page === 1 ? 0 : (page - 1) * limit;
  try {
    const response = await fetch(`https://dummyjson.com/users/search?limit=${limit}&skip=${skip}&q=${query}`).then(
      res => res.json()
    );
    return response;
  } catch (error) {
    return handleApiCallError(error, rejectWithValue);
  }
});
