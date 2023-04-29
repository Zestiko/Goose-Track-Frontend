import { createSlice } from '@reduxjs/toolkit';
import { changeMonth } from './tasksOperations';

const monthSlice = createSlice({
  name: 'month',
  initialState: Date.now(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeMonth.fulfilled, (state, action) => {
      return action.payload.month;
    });
  },
});

export default monthSlice.reducer;
