import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment/moment';

import scss from './CalendarGrid.module.scss';
import classNames from 'classnames';
import CalendarCell from './CalendarCell/CalendarCell';
import createCalendCells from 'components/utils/createCalenCells';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { useDispatch } from 'react-redux';
import { isCurrentMonth } from 'components/utils/IsCurrentMonth';
import { isCurrentDay } from 'components/utils/IsCurrentDay';

const CalendarGrid = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentMonth } = useParams();
  const currentDate = moment(currentMonth);
  const arrayDays = createCalendCells(currentDate);

  useEffect(() => {
    dispatch(fetchTasks(currentMonth));
  }, [dispatch, currentMonth]);

  const clickOnCalendarDay = day => {
    if (!currentDate.isSame(day, 'month')) {
      return;
    }
    navigate(`/calendar/day/${day.format('YYYY-MM-DD')}`);
  };

  return (
    <>
      <div className={classNames([scss.grid])}>
        {arrayDays.map(day => (
          <div
            key={day.unix()}
            className={classNames([scss.box])}
            onClick={() => clickOnCalendarDay(day)}
          >
            <div className={classNames([scss.box_wrap])}>
              <div
                className={classNames([
                  scss.box_day,
                  !isCurrentMonth(currentDate, day) && scss.not_current_month,
                  isCurrentDay(day) && scss.current_day,
                ])}
              >
                <span>{day.format('D')}</span>
              </div>
            </div>

            <div className={classNames([scss.notice_wrap])}>
              <CalendarCell item={day} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CalendarGrid;
