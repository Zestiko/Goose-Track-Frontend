import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserCheckSvg } from '../../images/icons/user-check-01.svg';
import { ReactComponent as LoginOutSvg } from '../../images/icons/log-out.svg';
import { ReactComponent as DefaultAvatarSvg } from '../../images/icons/profile-avatar-f.svg';
import { useDispatch, useSelector } from 'react-redux';
import { authLogoutThunk } from 'redux/user/user-operations';
import scss from './UserInfoModal.module.scss';
import { selectorGetUserAvatar, selectorGetUserName } from 'redux/user/selectors';

function UserInfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const dispatch = useDispatch();

  const userName = useSelector(selectorGetUserName);
  const avatarPath = useSelector(selectorGetUserAvatar);

  const handleLogout = () => {
    dispatch(authLogoutThunk());
  };

  const handlePopupToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div className={scss.userHeader} onClick={handlePopupToggle}>
      <p className={scss.userNameHeader}>{userName}</p>
      {avatarPath === undefined ? (
        <DefaultAvatarSvg className={scss.userAvatarHeader} />
      ) : (
        <img className={scss.userAvatarHeader} src={avatarPath} alt="avatar" />
      )}
      {isOpen && (
        <div className={scss.container} ref={popupRef}>
          <div className={scss.user}>
            {avatarPath === undefined ? (
              <DefaultAvatarSvg className={scss.userAvatar} />
            ) : (
              <img className={scss.userAvatar} src={avatarPath} alt="avatar" />
            )}

            <p className={scss.userName}>{userName}</p>
          </div>
          <NavLink className={scss.account} to="/account">
            <UserCheckSvg />
            My account
          </NavLink>
          <NavLink className={scss.logOut} to="/login" onClick={handleLogout}>
            Log out
            <LoginOutSvg />
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default UserInfoModal;