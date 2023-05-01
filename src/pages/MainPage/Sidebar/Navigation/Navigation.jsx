import {  useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as UserCheckSvg } from '../../../../images/icons/user-check-01.svg';
import { ReactComponent as CalendarCheckSvg } from '../../../../images/icons/calendar-check.svg';
import { ReactComponent as LoginOutSvg } from '../../../../images/icons/log-out.svg';

import css from './Navigation.module.scss';
import { getCurrentDate } from 'redux/calendar/selectors';
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = ({ theme }) => {
    const currentDate = useSelector(getCurrentDate);
  return (
    <div className={css.userPanel}>
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/user"
        className={
          `${css.navItem} ${theme}`
        }
      >
        <UserCheckSvg />
        My account
      </NavLink>
      <NavLink
        to={`/calendar/month/${currentDate.slice(0,7)}`}
        className={
          `${css.navItem} ${theme}`
        }
      >
        <CalendarCheckSvg />
        Calendar
      </NavLink>

      <NavLink
        to="/logout"
        className={classNames({ getActiveClassName }, `${css.button}`)}
      >
        Log out
        <LoginOutSvg />
      </NavLink>
    </div>
  );
};

export default Navigation;
