
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as UserCheckSvg } from '../../../../images/icons/user-check-01.svg';
import { ReactComponent as CalendarCheckSvg } from '../../../../images/icons/calendar-check.svg';
import { ReactComponent as LoginOutSvg } from '../../../../images/icons/log-out.svg';

import css from './Navigation.module.scss';
import { getCurrentDate } from 'redux/calendar/selectors';
import { authLogoutThunk } from 'redux/user/user-operations';
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = ({ theme }) => {
    const currentDate = useSelector(getCurrentDate);
    const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutThunk());
  };
  return (
    <div className={css.userPanel}>
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/user"
        className={({ isActive }) =>isActive ? css.activeLink : css.navLink}>
        <UserCheckSvg />
        My account
      </NavLink>
      <NavLink
        to={`/calendar/month/${currentDate.slice(0,7)}`}
        className={({ isActive }) =>isActive ? css.activeLink : css.navLink}>
        <CalendarCheckSvg />
        Calendar
      </NavLink>

      <NavLink
        to="/login"
        onClick={handleLogout}
        className={classNames({ getActiveClassName }, `${css.button}`)}
      >
        Log out
        <LoginOutSvg />
      </NavLink>
    </div>
  );
};

export default Navigation;
