import currentDateFormatted from '../../../../redux/calendar/getFormattedDate';

import { NavLink, useNavigate } from 'react-router-dom';
import {
  chosedDateAction,
  swichAction,
} from '../../../../redux/calendar/actions';
import { useSelector, useDispatch } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import css from './CalendarHeaderTask.module.scss';
import moment from 'moment/moment';
import { getCurrentDate, getDayOrMonth } from 'redux/calendar/selectors';

export const CalendarHeaderTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentDate = useSelector(getCurrentDate);
  const swich = useSelector(getDayOrMonth);
  const deserialized = moment(currentDate);

  const activeButton = isDayOrMonth => {
    if (isDayOrMonth) {
      navigate(`/calendar/month/${deserialized.format('YYYY-MM')}`);
    }
    dispatch(swichAction(isDayOrMonth));
  };

  const handleNext = day => {
    navigate(`/calendar/day/${day.format('YYYY-MM-DD')}`);
    dispatch(
      chosedDateAction(moment(deserialized.clone().add(1, 'day')).format())
    );
  };

  const handlePrev = day => {
    navigate(`/calendar/day/${day.format('YYYY-MM-DD')}`);
    dispatch(
      chosedDateAction(moment(deserialized.clone().subtract(1, 'day')).format())
    );
  };
  return (
    <>
      <div className={css.caledr_header_wrapper}>
        <div className={css.caledr_wrapper_month_prev_next}>
          <div className={css.caledr_month_title_wrap}>
            <span className={css.caledr_month_title}>
              {swich
                ? `${deserialized.format('MMMM')} ${deserialized.format(
                    'YYYY'
                  )}`
                : `${deserialized.format('D MMMM YYYY')}`}
            </span>
          </div>
          <div className={`${css.btn_prev_next}`}>
            <button
              type="button"
              className={`${css.btn} ${css.prev} ${css.btn_arrow} `}
              onClick={() =>
                handlePrev(deserialized.clone().subtract(1, 'day'))
              }
              disabled={
                currentDateFormatted.slice(0, 8)+"01" ===
                deserialized.format('YYYY-MM-DD')
              }
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className={`${css.btn} ${css.next} ${css.btn_arrow} `}
              onClick={() => handleNext(deserialized.clone().add(1, 'day'))}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className={css.caledr_header_wrapper_btn}>
          <button
            type="button"
            className={`${css.btn} ${css.month_day} ${css.month}
                ${swich ? css.active : ''}`}
            onClick={() => activeButton(true)}
          >
            <NavLink>Month</NavLink>
          </button>

          <button
            type="button"
            className={`${css.btn} 
                        ${css.month_day} ${css.next} ${css.day}
                        ${swich ? '' : css.active}`}
            onClick={() => activeButton(false)}
          >
            <NavLink to={`/calendar/day/${deserialized.format('YYYY-MM-DD')}`}>
              Day
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
