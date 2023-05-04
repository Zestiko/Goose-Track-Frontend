import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { CalendarHeaderWeek } from '../calendarHeaderWeek/CalendarHeaderWeek';
import { CalendarHeaderTask } from './сalendarHeaderTask/CalendarHeaderTask';
import css from './../Calendar.module.scss';

const CalendarDaysTask = () => {
  return (
    <div className={css.calendar_wrapper}>
      <CalendarHeaderTask />
      <CalendarHeaderWeek />
      <TasksColumnsList />
    </div>
  );
};
export default CalendarDaysTask;
