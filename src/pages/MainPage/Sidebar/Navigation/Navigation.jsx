import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as UserCheckSvg } from '../../../../images/icons/user-check-01.svg';
import { ReactComponent as CalendarCheckSvg } from '../../../../images/icons/calendar-check.svg';
import { ReactComponent as LoginOutSvg } from '../../../../images/icons/log-out.svg';

import css from './Navigation.module.scss';
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = ({theme}) => {
  return (
    <div className={css.userPanel}>
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/main/user"
        className={
          `${css.navItem} ${theme}`
        }
      >
        <UserCheckSvg />
        My account
      </NavLink>
      <NavLink
        to="/main/calendar/month/2023-04"
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
