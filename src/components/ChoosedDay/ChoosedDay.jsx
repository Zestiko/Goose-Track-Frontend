import { useParams } from 'react-router-dom';

import scss from './ChoosedDay.module.scss';

import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import moment from 'moment/moment';

const ChoosedDay = () => {
  const { currentDay } = useParams();
  const day = currentDay || moment(new Date()).format('YYYY-MM-DD');

  return (
    <div className={scss.boxChoosedDay}>
      <DayCalendarHead selectedDay={day} />
      <TasksColumnsList selectedDay={day} />
    </div>
  );
};

export default ChoosedDay;

/**
 * import { useSelector, useDispatch } from 'react-redux';
import { changeMonth } from '../redux/monthSlice';

const Calendar = () => {
  const month = useSelector(state => state.month);
  const dispatch = useDispatch();

//=========newMonth - змінна котра отримує дату коли юзер клікає по калндарю у форматі'YYYY-MM'
const newMonthFormatted = moment(newMonth).format('YYYY-MM');
  if (newMonth !== month) {
    dispatch(changeMonth(newMonthFormatted));
  }
  ..............................
};
 */
