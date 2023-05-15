import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import classNames from 'classnames';
import scss from './DayCalendarHead.module.scss';
import { newWeek } from 'components/utils/createNewWeek';

const DayCalendarHead = ({ currentDay }) => {
  const chosedDay = moment(currentDay);
  const week = newWeek(chosedDay);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isCurrentChosedDay = item => chosedDay.isSame(item, 'D');

  return (
    <div className={classNames([scss.days_wrapper, scss.days_wrapp])}>
      {week.map((day, i) => {
        const checkDay = isCurrentChosedDay(day);
        return (
          <NavLink
            key={i}
            className={classNames([
              scss.days_wrap,
              scss.column,
              !checkDay ? scss.hover_color : [scss.back, scss.scale],
            ])}
            to={`/calendar/day/${day.format('YYYY-MM-DD')}`}
          >
            <div className={scss.days}>
              {windowSize < 768 ? `${day.format('d')}` : `${day.format('ddd')}`}
            </div>
            <div className={scss.date}>
              <span>{day.format('D')}</span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default DayCalendarHead;
