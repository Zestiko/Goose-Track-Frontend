import moment from 'moment';
import { STATUS } from '../../constants/status.constants';

export const tasksInitState = {
  tasks: [],
  date: moment(new Date()).format('MM-YYYY'),
  status: STATUS.idle,
};
