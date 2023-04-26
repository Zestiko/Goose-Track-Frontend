import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import userCheckSvg from '../../../../images/icons/user-check-01.svg';
import calendarCheckSvg from '../../../../images/icons/calendar-check.svg';


import css from './Navigation.module.scss';
console.log(userCheckSvg);
// Для теста
const isActive = true;
const getActiveClassName = ({ isActive }) =>
  isActive ? 'selected' : 'unselected';

const Navigation = () => {
  //    const dispatch = useDispatch()
  //    const location = useLocation()

  // const isActiveToken
  return (
    <div className="userPanel">
      {/* {isActiveToken && <h2 className="">Please SignIn</h2>} */}
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/myAccount"
        className={classNames(
          { getActiveClassName },
          `${css.navItem}`,
          `${css.navItem_1}`
        )}
      >
        <svg>
          <use href={userCheckSvg}></use>
        </svg>
        My account
      </NavLink>
      <NavLink
        to="/calendar"
        className={classNames({ getActiveClassName }, `${css.navItem}`)}
      >
        <svg>
          <use href={calendarCheckSvg}></use>
        </svg>
        Calendar
      </NavLink>
      <button>Log out </button>
    </div>
  );
};

export default Navigation;
