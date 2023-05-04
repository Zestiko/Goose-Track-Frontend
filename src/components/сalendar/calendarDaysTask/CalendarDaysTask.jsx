import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import css from './../Calendar.module.scss';
import { CalendarHeaderWeek } from '../calendarHeaderWeek/CalendarHeaderWeek';
import { CalendarHeaderTask } from './сalendarHeaderTask/CalendarHeaderTask';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { getCurrentDate } from 'redux/calendar/selectors';
import { useTasksByChoosedDay } from 'hooks/useTasksByChoosedDay';


const CalendarDaysTask = () => {
  const dispatch = useDispatch();
 const currentDate = useSelector(getCurrentDate);
   useEffect(() => {
     dispatch(fetchTasks(currentDate));
   }, [currentDate, dispatch]);
    const { tasks } = useTasksByChoosedDay(currentDate) || [];

  return (
    <div className={css.calendar_wrapper}>
      <CalendarHeaderTask />
      <CalendarHeaderWeek />
      <TasksColumnsList dayTasks={tasks}/>
    </div>
  );
};
export default CalendarDaysTask;
