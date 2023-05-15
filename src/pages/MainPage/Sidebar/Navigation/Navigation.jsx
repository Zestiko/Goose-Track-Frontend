import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authLogoutThunk } from 'redux/user/user-operations';

import classNames from 'classnames';
import { ReactComponent as LoginOutSvg } from '../../../../images/icons/log-out.svg';
import { BsListStars, BsCalendar4 } from 'react-icons/bs';
import { FiUserCheck } from 'react-icons/fi';

import css from './Navigation.module.scss';

const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <div className={css.userPanel}>
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <FiUserCheck />
        My account
      </NavLink>
      <NavLink
        to={`/calendar`}
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <BsCalendar4 />
        Calendar
      </NavLink>
      <NavLink
        to="/canban"
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <BsListStars />
        Canban
      </NavLink>
      <NavLink
        to="/login"
        onClick={handleLogout}
        className={classNames([{ getActiveClassName }, css.button])}
      >
        Log out
        <LoginOutSvg />
      </NavLink>
    </div>
  );
};

export default Navigation;
