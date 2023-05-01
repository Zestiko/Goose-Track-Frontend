import { createReducer } from '@reduxjs/toolkit';
import { chosedDateAction, swichAction } from './actions';
const { calendarState } = require('./calendarState');

const calendarReducer = createReducer(calendarState, builder => {
  builder
    .addCase(chosedDateAction, (state, { payload }) => {
      state.currentDate = payload;
    })
    .addCase(swichAction, (state, { payload }) => {
      state.isDayOrMonth = payload;
    });
});

export { calendarReducer };
