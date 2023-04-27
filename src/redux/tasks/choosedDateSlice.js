const { createSlice } = require('@reduxjs/toolkit');

const choosedDateSlice = createSlice({
  name: 'choosedDate',
  initialState: { value: Date.now() },
  reducers: {
    updateChoosedDate: {
      reducer(state, action) {
        state.value = action.payload;
      },
    },
  },
});

export const { updateChoosedDate } = choosedDateSlice.actions;
export const choosedDateReducer = choosedDateSlice.reducer;
