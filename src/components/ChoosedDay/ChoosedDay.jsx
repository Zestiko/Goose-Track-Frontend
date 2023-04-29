import { useParams } from 'react-router-dom';

import scss from './ChoosedDay.module.scss';
import { useSelector, useDispatch } from 'react-redux';

// import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
// import DayCalendarHead from 'components/DayCalendarHead/DayCalendarHead';
import moment from 'moment/moment';
import { changeMonth } from 'redux/tasks/tasksOperations';

const ChoosedDay = () => {
  const { currentDay } = useParams();
  const day = currentDay || moment(new Date()).format('YYYY-MM-DD');

  console.log(day);
  //==============================================================
  const month = useSelector(state => state.month);
  const dispatch = useDispatch();
  const date = new Date('2023-05-05');
  const newMonthFormatted = moment(date).format('YYYY-MM');

  if (newMonthFormatted !== month) {
    dispatch(changeMonth(newMonthFormatted));
  }
  //=============================================================
  return (
    <div className={scss.boxChoosedDay}>
      {/* <DayCalendarHead selectedDay={day} />
      <TasksColumnsList selectedDay={day} /> */}
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

const newMonthFormatted = moment(newMonth).format('YYYY-MM');
  
  ..............................

  if (newMonth !== month) {
    dispatch(changeMonth(newMonthFormatted));
  }
  ..............................
};
 */
