import { createReducer } from '@reduxjs/toolkit';
import { chosedDateAction, swichAction } from './actions';
import { changeMonth } from 'redux/tasks/tasksOperations';
import moment from 'moment';
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

export const fetchTasksOnDateChange = store => next => action => {
  const result = next(action);
  if (action.type === chosedDateAction.type) {
    const currenChoosedMonth = moment(action.payload).format('YYYY-MM');
    const monthFromSate = moment(store.getState().tasks.date).format('YYYY-MM');
    currenChoosedMonth !== monthFromSate &&
      store.dispatch(changeMonth(currenChoosedMonth));
  }
  return result;
};

export { calendarReducer };
