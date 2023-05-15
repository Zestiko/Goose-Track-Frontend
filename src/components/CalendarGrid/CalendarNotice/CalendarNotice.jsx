import scss from './CalendarNotice.module.scss';
import classNames from 'classnames';

const CalendarNotice = ({ id, title, priority }) => {
  return (
    <li key={id}>
      <p title={title} className={classNames([scss.notice, scss[priority]])}>
        {title}
      </p>
    </li>
  );
};

export default CalendarNotice;
