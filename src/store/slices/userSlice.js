import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = userSlice.reducer;
