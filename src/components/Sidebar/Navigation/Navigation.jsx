import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { ReactComponent as LoginOutSvg } from 'images/icons/log-out.svg';
import { BsListStars, BsCalendar4 } from 'react-icons/bs';
import { FiUserCheck } from 'react-icons/fi';
import { useToggle } from 'hooks/useToggle';
import css from './Navigation.module.scss';
import Modal from 'components/Modal/Modal';
import Logout from 'components/Logout/Logout';

const Navigation = ({ onCloseMenu }) => {
  const { isOpen, onOpen, onClose } = useToggle();

  const closeMobileMenu = () => {
    onCloseMenu && onCloseMenu();
  };
  const onLogout = () => {
    onOpen();
    onCloseMenu && onCloseMenu();
  };

  return (
    <div className={css.userPanel}>
      <p className={css.navLabel}>User Panel</p>
      <NavLink
        to="/account"
        onClick={closeMobileMenu}
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <FiUserCheck />
        My account
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to={`/calendar`}
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <BsCalendar4 />
        Calendar
      </NavLink>
      <NavLink
        onClick={closeMobileMenu}
        to="/canban"
        className={({ isActive }) => (isActive ? css.activeLink : css.navLink)}
      >
        <BsListStars />
        Canban
      </NavLink>
      <button onClick={onLogout} className={classNames(css.button)}>
        Log out
        <LoginOutSvg />
      </button>
      {isOpen && (
        <Modal onClose={onClose}>
          <Logout onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};

export default Navigation;
