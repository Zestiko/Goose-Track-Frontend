import moment from 'moment/moment';

const isCurrentDay = day => moment().isSame(day, 'D');
const isCurrentChosedDay = (date, day) => date.isSame(day, 'D');

export { isCurrentDay, isCurrentChosedDay };
