import css from '../Calendar.module.css';
import { CalendarHeaderWeek } from '../calendarHeaderWeek/CalendarHeaderWeek';
import { CalendarHeaderTask } from './сalendarHeaderTask/CalendarHeaderTask';

import { getCurrentDate } from '../../../redux/calendar/selectors';
import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';

const CalendarDaysTask = () => {
  const currentDate = useSelector(getCurrentDate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks(currentDate));
  }, [currentDate, dispatch]);

  return (
    <div className={css.calendar_wrapper}>
      <CalendarHeaderTask />
      <CalendarHeaderWeek />
      <TasksColumnsList selectedDay={currentDate} />
    </div>
  );
};
export default CalendarDaysTask;
