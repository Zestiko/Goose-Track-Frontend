import scss from './PeriodTypeSelect.module.scss';

const PeriodTypeSelect = ({ periodTypeSelect, currentDate, period }) => {
  return (
    <div className={scss.caledr_header_wrapper_btn}>
      <button
        type="button"
        disabled={period}
        className={`${scss.btn} ${scss.month_day} ${scss.month}
                ${period && scss.active}`}
        onClick={() => periodTypeSelect('M')}
      >
        Month
      </button>

      <button
        type="button"
        disabled={!period}
        className={`${scss.btn} 
                        ${scss.month_day} ${scss.next} ${scss.day}
                        ${!period && scss.active}`}
        onClick={() => periodTypeSelect('D')}
      >
        Day
      </button>
    </div>
  );
};

export default PeriodTypeSelect;
