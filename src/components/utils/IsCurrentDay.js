import moment from 'moment/moment';

export const isCurrentDay = day => moment().isSame(day, 'D');
