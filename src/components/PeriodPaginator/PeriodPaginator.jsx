import scss from './PeriodPaginator.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PeriodPaginator = ({ handleNext, handlePrev, currentDate }) => {
  return (
    <div className={`${scss.btn_prev_next}`}>
      <button
        type="button"
        className={`${scss.btn} ${scss.prev} ${scss.btn_arrow} `}
        onClick={() => handlePrev(currentDate)}
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        className={`${scss.btn} ${scss.next} ${scss.btn_arrow} `}
        onClick={() => handleNext(currentDate)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PeriodPaginator;
