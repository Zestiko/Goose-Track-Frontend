import scss from './CalendarPin.module.scss';
import classNames from 'classnames';

const CalendarPin = ({ title, priority }) => {
  return (
    <li>
      <span
        title={title}
        className={classNames([scss.pin, scss[priority]])}
      ></span>
    </li>
  );
};

export default CalendarPin;
