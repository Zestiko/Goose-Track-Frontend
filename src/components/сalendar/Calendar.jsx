// import css from "./Calendar.module.scss";
import { useEffect } from "react";
import { CalendarHeaderDays } from "./calendarHeaderDays/CalendarHeaderDays";
import { CalendarGrid } from "./сalendarGrid/CalendarGrid";
import { CalendarHeader } from "./сalendarHeader/CalendarHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/tasks/tasksOperations";
import { getCurrentDate } from "../../redux/calendar/selectors";

const Calendar = () => {
  const currentDate = useSelector(getCurrentDate);
      const dispatch = useDispatch();
  useEffect(() => {

    dispatch(fetchTasks(currentDate))
  },[currentDate, dispatch])

    return (
    <div className=''>
        <CalendarHeader/>
        <CalendarHeaderDays/>
        <CalendarGrid/>
      </div>

  )
}
export default Calendar;