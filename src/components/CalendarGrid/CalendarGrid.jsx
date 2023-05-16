import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import classNames from 'classnames';
import moment from 'moment/moment';
import CalendarCell from './CalendarCell/CalendarCell';

import scss from './CalendarGrid.module.scss';
import {
  isCurrentMonth,
  isCurrentDay,
  createCalendCells,
} from 'components/utils';

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
