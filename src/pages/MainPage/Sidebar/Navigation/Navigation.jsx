import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as UserCheckSvg } from '../../../../images/icons/user-check-01.svg';
import { ReactComponent as CalendarCheckSvg } from '../../../../images/icons/calendar-check.svg';
import { ReactComponent as LoginOutSvg } from '../../../../images/icons/log-out.svg';

import css from './Navigation.module.scss';
import { authLogoutThunk } from 'redux/user/user-operations';
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = ({theme}) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutThunk());
  };
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
