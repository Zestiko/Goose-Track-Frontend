import UserAvatar from '../UserAvatar/UserAvatar';
import scss from './UserPopup.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as UserCheckSvg } from '../../../images/icons/user-check-01.svg';
import { ReactComponent as LoginOutSvg } from '../../../images/icons/log-out.svg';

const UserPopup = ({ userName, onClose, handleLogout }) => {
  return (
    <>
      <div className={scss.container}>
        <div className={scss.user}>
          <UserAvatar />
          <p className={scss.userName}>{userName}</p>
        </div>
        <Link className={scss.account} to="/account" onClick={onClose}>
          <UserCheckSvg />
          My account
        </Link>
        <button className={scss.logOut} onClick={handleLogout}>
          Log out
          <LoginOutSvg />
        </button>
      </div>
    </>
  );
};

export default UserPopup;
