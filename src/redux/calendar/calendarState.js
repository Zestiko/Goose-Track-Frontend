import moment from 'moment/moment';
// import currentDateFormatted from './getFormattedDate';

moment.updateLocale('en', { week: { dow: 1 } });

export const calendarState = {
  loginDate: moment().format('YYYY-MM'),
  currentDate: moment().format(),
  isDayOrMonth: true,
};
