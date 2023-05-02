import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import css from '../Calendar.module.css';
import { CalendarHeaderWeek } from '../calendarHeaderWeek/CalendarHeaderWeek';
import { CalendarHeaderTask } from './сalendarHeaderTask/CalendarHeaderTask';

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
