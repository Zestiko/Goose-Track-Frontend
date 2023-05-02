
import css from "../Calendar.module.scss";
import { CalendarHeaderWeek } from "../calendarHeaderWeek/CalendarHeaderWeek";
import { CalendarHeaderTask } from "./сalendarHeaderTask/CalendarHeaderTask";

import { getCurrentDate } from "../../../redux/calendar/selectors";
import TasksColumnsList from "components/TasksColumnsList/TasksColumnsList";
import { useSelector } from "react-redux";

const CalendarDaysTask = () => {
    const currentDate = useSelector(getCurrentDate);
    return (
         <div className={css.calendar_wrapper}>
            <CalendarHeaderTask/>
            <CalendarHeaderWeek/>
            <TasksColumnsList selectedDay={currentDate} />
        </div>
        
    )
}
export default CalendarDaysTask;